import { RouterView } from 'vue-router';
import { h, defineComponent } from 'vue';

export const baseRouteView = (storeModule: any) => {
	const routeView = {
		name: 'BaseRouteView',
		setup() {
			return () => h(RouterView);
		},
		beforeCreate() {
			const name: string = storeModule.default.moduleName;

			if (!(this as any).$store[name]) {
				(this as any).$store.addMoudle(name, new storeModule.default());
			}
		}
	};
	return defineComponent(routeView);
};
