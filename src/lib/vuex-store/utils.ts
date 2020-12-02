import { reactive } from 'vue'

export const isNotPro: boolean = process.env.NODE_ENV !== 'production';

export const vueObservable = (target: any) => {
	target = reactive(target);
	return;
}

export const defineMoudle = (localVue: any, target: any, storeModule: any):void => {
	// const modules = Array.isArray(storeModule) ? storeModule : [storeModule];
	// modules.forEach((m) => {
	// 	Object.keys(m).forEach((k) => {
	// 		localVue.set(target, k, vueObservable(localVue, m[k]));
	// 	});
	// });
	return;
};

export const getPrototypes = (obj: object, target: object): Array<object> => {
    const prototypes: Array<object> = [];
    let current: object = obj;
    while (current !== target) {
        current = Object.getPrototypeOf(current);
        prototypes.push(current);
	}
    return prototypes;
};
interface GetOwnPropertyDescriptors {
    [x: string]: PropertyDescriptor | undefined;
}
const getOwnPropertyDescriptors = (obj: object): GetOwnPropertyDescriptors => {
    const descriptors: GetOwnPropertyDescriptors = {};
    const names: Array<string> = Object.getOwnPropertyNames(obj);
    names.forEach(k => {
        descriptors[k] = Object.getOwnPropertyDescriptor(obj, k);
    });
    return descriptors;
};

export const getDescriptors = (prototypes: Array<object>): GetOwnPropertyDescriptors => {
    const descriptors: GetOwnPropertyDescriptors = {};
    let i: number = prototypes.length;
    while (i--) {
        const prototype: object = prototypes[i];
        Object.assign<GetOwnPropertyDescriptors, GetOwnPropertyDescriptors>(descriptors, getOwnPropertyDescriptors(prototype));
    }
    return descriptors;
};
