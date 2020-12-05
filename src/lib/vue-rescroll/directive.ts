import { VNode, Plugin, App, DirectiveHook, DirectiveBinding, ObjectDirective, ComponentPublicInstance } from 'vue';
import RestoreScroll, { RestoreScrollOptions } from './vue-rescroll';

export type StorageMode = 'localstorage' | 'default';

export interface Value {
	name: string;
	type?: 'window' | 'local';
	storageMode?: StorageMode;
	domType?: 'tab' | 'default';
}

export interface DirectiveHTMLElement extends HTMLElement {
	restoreScroll?: any;
}

export interface VueRoot extends ComponentPublicInstance {
	$rescroll?: any;
}

let nowName: string = '';
const fun: DirectiveHook = (el: DirectiveHTMLElement, binding: DirectiveBinding<Value>, vnode: VNode, prevVNode: VNode | null) => {
	if (!binding.value) throw Error('please set required parameters');
	nowName = binding.value.name;
	const { dirs } = vnode;
	if (!dirs || !dirs.length) return;
	const { instance } = dirs[0];
	if (!instance) return;
	const root: VueRoot | null = instance.$root;
	if (!root) return;
	let options: RestoreScrollOptions;
	const { name, type = '', storageMode = 'default', domType = '' } = binding.value;
	if (!name) throw Error('please set name');
	options = {
		dom: el,
		name,
		type,
		storageMode,
		instance
	};
	if (binding.value.storageMode !== 'localstorage') {
		!root.$rescroll && (root.$rescroll = {});
		options.rescroll = root.$rescroll;
	}
	!el.restoreScroll && (el.restoreScroll = {});

	if (!el.restoreScroll[nowName]) {
	    console.log(options, 'tttttttttttttttttttttttttttt');
		el.restoreScroll[nowName] = new RestoreScroll(options);
		return;
	}
	if (domType && domType === 'tab') 
		return el.restoreScroll[nowName].update(options);
};
export const directive: ObjectDirective = {
	mounted: function(
		el: DirectiveHTMLElement,
		binding: DirectiveBinding<Value>,
		vnode: VNode,
		prevVNode: VNode | null
	) {
		console.log('mounted');
		return fun(el, binding, vnode, prevVNode);
	},
	beforeUnmount(el: DirectiveHTMLElement) {
		console.log('beforeUnmount');
		if (!el.restoreScroll || !el.restoreScroll[nowName]) return;
		el.restoreScroll[nowName].destroy();
		delete el.restoreScroll;
	}
};

const plugin: Plugin = {
	install(Vue: App) {
		Vue.directive('rescroll', directive);
	}
};

export default plugin;

if (typeof window !== 'undefined' && !!window.Vue) {
	window.Vue.use(plugin);
}

/**
 * 在window对象中添加app对象
 */
declare global {
	interface Window {
		Vue: App;
	}
}