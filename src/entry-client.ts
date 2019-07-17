import Vue from 'vue';
import 'es6-promise/auto';
import Main from './main';
// import 'vue2-toast/lib/toast.css';
import { Route } from 'vue-router';
import MyButton from '@src/components/mybutton';
import SvgIcon from '@src/components/svg';
import VueRescroll from 'vue-rescroll';
// const isDev = process.env.NODE_ENV !== 'production';

Vue.use(MyButton);
Vue.use(VueRescroll);
Vue.use(SvgIcon);

// Vue.use(Toast, {
// 	defaultType: 'bottom',
// 	duration: 1000,
// 	wordWrap: true,
// 	width: '170px'
// });

/**
 * 当组件复用时，触发asyncData钩子，重新请求数据
 */
// Vue.mixin({
// 	beforeRouteUpdate(to: any, from: any, next: any) {
// 		const { asyncData } = (this as any).$options;
// 		if (asyncData) {
// 			asyncData({
// 				store: (this as any).$store,
// 				route: to
// 			})
// 				.then(next)
// 				.catch(next);
// 		} else {
// 			next();
// 		}
// 	}
// });

class EntryClient extends Main {
	public constructor() {
		super();
		this.initState();
	}
	public initState() {
		// 获取服务端渲染时，注入的__INITIAL_STATE__信息，并同步到客户端的vuex store中
		window.__INITIAL_STATE__ &&
			this.store.replaceState(window.__INITIAL_STATE__);
	}
	public getPageData() {
		const { router, store } = this;
		router.beforeResolve(
			async (to: Route, from: Route, next: () => void) => {
				const matched = router.getMatchedComponents(to);
				const prevMatched = router.getMatchedComponents(from);
				let diffed = false;
				// 校验to的路由地址和from的路由地址是否相等，如果不相等则在客户端触发asyncData钩子
				const activated = matched.filter((c: any, i: any) => {
					return diffed || (diffed = prevMatched[i] !== c);
				});
				const asyncDataHooks = activated
					.map((c: any) => c.options.asyncData)
					.filter((_: any) => _);
				if (!asyncDataHooks.length) {
					return next();
				}
				await Promise.all(
					asyncDataHooks.map(
						async (hook: any) => await hook({ store, route: to })
					)
				)
					.then(() => {
						next();
					})
					.catch(next);
			}
		);
	}
	public onRouteReady() {
		const { router, app } = this;
		router.onReady(() => {
			this.getPageData();
			app.$mount('#app'); // 挂在到app上
		});
	}
}

const createApp = () => {
	const app = new EntryClient();
	window.app = app;
	app.onRouteReady();
};

export default createApp();

declare global {
	interface Window {
		__INITIAL_STATE__: any;
		app: EntryClient;
	}
}
