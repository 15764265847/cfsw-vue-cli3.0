import { RouterView } from 'vue-router';
import { h, defineComponent } from 'vue';

// const registerStoreModule = (storeModule: any) => {
// 	const name: string = storeModule.default.moduleName;
// 	// if (!(store as any)[name]) {
// 	// 	store.addMoudle(name, new storeModule.default());
// 	// }
// };

export const baseRouteView = (storeModule: any) => {
	const routeView = {
		name: 'BaseRouteView',
		setup() {
			return () => h(RouterView);
		},
		beforeCreate() {
			console.log(storeModule, 'nnnnnnnnnnnnnnnnnnnnnnnnnnnn');
			const name: string = storeModule.moduleName;

			if (!(this as any).$store[name]) {
				(this as any).$store.addMoudle(name, new storeModule());
			}
		}
	};
	return defineComponent(routeView);
};
