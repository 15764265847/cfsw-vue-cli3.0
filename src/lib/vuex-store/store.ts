import { reactive } from 'vue'
import {
	vueObservable,
	defineMoudle,
	getDescriptors,
	getPrototypes
} from './utils';

let localVue: any = null;


export class StoreModule {
 	public constructor() {
		const descriptors = getDescriptors(getPrototypes((this as any).modules || this, StoreModule.prototype));
		Object.keys(descriptors).forEach(type => {
			const descriptor: PropertyDescriptor | undefined = descriptors[type];
			if (typeof descriptor !== 'undefined' && /^\$/.test(type) && typeof descriptor.value === 'function') {
				// console.log('================================================');
				// console.log(descriptor);
				// console.log('================================================');
				Object.defineProperty(this, type, {
					...descriptor,
					value: (...payloads: Array<any>) => {
						const value = descriptor.value.apply(this, payloads);
						// dispatch(type, ...payloads);
						console.log((this as any).path + '.' + type, payloads, 'wwwwwwwwwwwwwwwwwwwwww');
						return value;
					}
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
		// this.modules = reactive(this.modules);
		// this.reactiveModule();
	}
	public reactiveModule() {
		// console.log(Object.keys(this));
		// Object.keys(this).forEach((key) => {
		// 	const k = (this as any)[key];
		// 	if (typeof k !== 'object') return;
        //     this.modules[key] = reactive(k);
		// })
	}

	// 添加模块
	public addMoudles(key: string, module: any): this {
		// if (!module) return this;
		// this.modules[key] = reactive(module);
		// this.modules = reactive(this.modules);
		// Object.defineProperty(this, key, {
		// 	get() {
		// 		return this.modules[key];
		// 	}
		// })
		return this;
	}

	public replace(store: any) {}
}
