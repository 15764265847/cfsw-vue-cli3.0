import Store from '@wefly/vue-store-next';

export class BaseStore extends Store {
	public constructor() {
		super();
		return this.init();
	}
}

export default BaseStore;

declare module '@vue/runtime-core' {
	export interface ComponentCustomProperties {
		$store: BaseStore;
	}
}
