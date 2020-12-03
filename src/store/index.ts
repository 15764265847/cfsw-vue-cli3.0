import { reactive } from 'vue';
import Store from '../lib/vuex-store';

class Test2 {
	_t2 = 11;
	constructor() {
		Object.defineProperty(this, 't2', {
			get() {
				return this._t2;
			},
			set(val) {
				this._t2 = val;
			}
		});
		Object.defineProperty(this, 'addt', {
			value: () => {
				console.log((this as any).t2, 'gggggggggggggggg');
				return (this as any).t2++;
			}
		});
	}
}

class Test1 extends Test2 {
	t = 1;
}

class Test {
	t1 = new Test1();
}

export class BaseStore extends Store {
	b = 0;
	c = {
		e: {
			f: 63
		},
		g: new Test()
	};
	add() {
		this.b++;
	}
	addC() {
		this.c.e.f++;
	}
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
