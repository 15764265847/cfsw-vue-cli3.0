import Vue from 'vue';
import VueLazy from 'vue-lazy-store';
import Publics from './modules/publics';
import BaseConfig from '@src/config';

Vue.use(VueLazy);
export interface StoreOptions {
	appConfig: BaseConfig;
}

class BaseStore extends VueLazy.Store {
	public publics: Publics;
	constructor({ appConfig }: StoreOptions) {
		super();
		this.publics = new Publics({ appConfig });
		this.init();
	}
}

export default BaseStore;

declare module 'vue/types/vue' {
	interface Vue {
		$store: BaseStore;
	}
}

declare module 'vue/types/options' {
	interface ComponentOptions<V extends Vue> {
		store?: BaseStore;
	}
}
