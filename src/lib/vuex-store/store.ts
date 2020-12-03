import { reactive } from 'vue'
import {
	getDescriptors,
	getPrototypes
} from './utils';
import Dep, { SubFunction } from './dep';

export const dep: Dep = new Dep();

export class StoreModule {
 	public constructor() {
		const descriptors = getDescriptors(getPrototypes((this as any).modules || this, StoreModule.prototype));
		Object.keys(descriptors).forEach(type => {
			const descriptor: PropertyDescriptor | undefined = descriptors[type];
			if (typeof descriptor !== 'undefined' && /^\$/.test(type) && typeof descriptor.value === 'function') {
				Object.defineProperty(this, type, {
					...descriptor,
					value: new Proxy((this as any)[type], {
						apply(target, thisArg, args) {
							// console.log('');
							// console.log(thisArg.path, args, 'iiiiiiiiiiiiiiiiiiiiiiii');
							// console.log('');
							dep.notify({
								path: thisArg.path,
								params: args,
								param: args[0]
							})
							return target.call(thisArg, ...args);
						}
					})
				});
				return;
			}
		});
	}
}

export default class Store extends StoreModule {
    public install(_Vue: any, injectKey: string) {
		_Vue.provide(injectKey || 'store', this)
        _Vue.config.globalProperties.$store = this
	}

	public getState(father: any, target: any) {
		Object.getOwnPropertyNames(target).forEach(k => {
            	if (target[k] instanceof StoreModule) {
				    this.getState(target, target[k]);
				} else {
					father && Object.keys(father).forEach(fk => {
						if (father[fk] === target) {
                            target.path = father.path ? `${father.path}.${fk}` : fk;
						}
					});
				}
		});
	}

	public init() {
		this.getState(null, this);
		return reactive(this);
	}

	// 添加模块
	public addMoudles(key: string, module: any): this {
		if (!module) return this;
		(this as any)[key] = module;
		this.getState(this, (this as any)[key]);
		return this;
	}

	public subscribe(callback: SubFunction) {
		dep.addSub(callback)
	}

	public replace(store: any) {}
}
