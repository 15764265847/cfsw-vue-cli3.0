import { reactive } from 'vue'
import {
	getDescriptors,
	getPrototypes
} from './utils';

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
    public modules: any = {};

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
		this.getState(null, this);
		return this;
	}

	public replace(store: any) {}
}
