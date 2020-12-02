import { reactive } from 'vue';
import Store from '../lib/vuex-store';
import Blog from '@src/modules/blog/store';

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
	public blog = new Blog();
	public constructor() {
		super();
		this.init();
	}
}

export default reactive(new BaseStore());

declare module '@vue/runtime-core' {
	export interface ComponentCustomProperties {
		$store: BaseStore;
	}
}
