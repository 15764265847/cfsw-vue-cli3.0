import Store from '../lib/vuex-store';

export class BaseStore extends Store {
	public constructor() {
		super();
		return this.init();
	}
}

export default new BaseStore();

declare module '@vue/runtime-core' {
	export interface ComponentCustomProperties {
		$store: BaseStore;
	}
}
