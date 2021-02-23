import Store from '@wefly/vue-store-next';

export class BaseStore extends Store {
	public constructor() {
		super();
		console.log(this);
		return this.init();
	}
}

export default BaseStore;

declare module '@vue/runtime-core' {
	export interface ComponentCustomProperties {
		$store: BaseStore;
	}
}
