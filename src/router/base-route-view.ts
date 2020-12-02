import store from '@src/store';
import { RouterView } from 'vue-router';
import { h } from 'vue';

const registerStoreModule = (storeModule: any) => {
	const name: string = storeModule.default.moduleName;

	// if (!(store as any)[name]) {
	// 	store.addMoudles(name, new storeModule.default());
	// }
};

export const baseRouteView = (storeModule: any) => {
	const routeView = {
		name: 'BaseRouteView',
		setup() {
			registerStoreModule(storeModule);
			return () => h(RouterView);
		}
	};
	return routeView;
};
