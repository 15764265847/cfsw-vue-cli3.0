import { StorageMode, VueRoot } from './directive';

interface Position {
	x: number;
	y: number;
}
class ScrollPosition {
	position: Position = {
		x: 0,
		y: 0
	};
	$savePosition(position: Position) {
		return Object.assign(this.position, position);
	}
}

let nowName: string = '';

/**
 * 指令类
 */
export interface RestoreScrollOptions {
	dom: HTMLElement;
	name: string;
	type: string;
	storageMode: StorageMode;
	instance: VueRoot;
	rescroll?: any;
}
export default class RestoreScroll {
	opt: RestoreScrollOptions;
	watchScroll?: () => void;
	timer: any;
	constructor(options: RestoreScrollOptions) {
		this.opt = options;
		this.timer = {};
		this.openScrollStore();
		this.getPosition();
		this.scrollTo();
	}
	update(): this {
		this.scrollTo();
		return this;
	}
	openScrollStore(): this {
		const { rescroll = null, name, storageMode = '' } = this.opt;
		if (!rescroll || storageMode === 'localstorage') return this;
		if (!rescroll[name]) {
			rescroll[name] = new ScrollPosition();
		}
		return this;
	}
	getPosition(): this {
		const { dom, name, rescroll, type, storageMode } = this.opt;
		let tag;
		if (type && type === 'window') {
			tag = window;
		} else {
			tag = dom;
		}
		this.watchScroll = () => {
			console.log('vvvvvvvvvvvvvvvvvvvvv');
			if (name === nowName) {
				const key = `timer-${name}`;
				clearTimeout(this.timer[key]);
				this.timer[key] = setTimeout(() => {
					let position;
					if (type && type === 'window') {
						position = {
							x: window.scrollX,
							y: window.scrollY
						};
					} else {
						position = {
							x: dom.scrollLeft,
							y: dom.scrollTop
						};
					}
					if (storageMode && storageMode === 'localstorage') {
						localStorage.setItem(
							`${name}`,
							JSON.stringify(position)
						);
					} else {
						rescroll[name].$savePosition(position);
					}
					delete this.timer[key];
				}, 1000 / 60);
			}
		};
		tag.addEventListener('scroll', this.watchScroll, false);
		return this;
	}
	scrollTo(): this {
		const { dom, name, rescroll, type, storageMode, instance } = this.opt;
		let position;
		if (storageMode && storageMode === 'localstorage') {
			const str = localStorage.getItem(`${name}`);
			if (!str) return this;
			position = JSON.parse(str);
		} else {
			position = rescroll[name].position;
		}
		if (!position) return this;
		console.log(position, rescroll, 'uuuuuuuuuuuuuuuuuuuuuuu');
		const { x = 0, y = 0 } = position;
		instance.$nextTick(() => {
			if (type && type === 'window')
				return window.scrollTo(x, y);
				// !rescroll || !rescroll[name] ||
			if (
				dom.scrollHeight < y ||
				dom.scrollWidth < x
			) {
				dom.scrollLeft = 0;
				dom.scrollTop = 0;
				return this;
			} else {
				dom.scrollLeft = x;
				dom.scrollTop = y;
			}
		});
		return this;
	}
	destroy(): this {
		const { dom } = this.opt;
		if (this.watchScroll) {
			dom.removeEventListener('scroll', this.watchScroll, false);
		}
		return this;
	}
}
