import { reactive } from 'vue';
import Store from '../lib/vuex-store';

export class BaseStore extends Store {
	b = 0;
	c = {
		e: {
			f: 63
		}
	};
	add() {
		this.b++;
	}
	addC() {
		this.c.e.f++;
	}
	public constructor() {
		super();
		this.init();
	}
}

export default new BaseStore();

declare module '@vue/runtime-core' {
	export interface ComponentCustomProperties {
		$store: BaseStore;
	}
}
