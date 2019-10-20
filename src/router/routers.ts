const Home = () =>
	import(/* webpackChunkName: "home" */ '@src/views/chatroom.vue');
// 文章相关
const ArticDetail = () =>
	import(/* webpackChunkName: "artic" */ '@src/views/artic/artic-detail.vue');
import { CreateElement } from 'vue';

const RouteView = {
	render: (h: CreateElement) => h('router-view')
};

import { RouteConfig } from 'vue-router';

const RorterList: Array<RouteConfig> = [
	// /**
	//  * 首页
	//  */
	// {
	// 	path: '/',
	// 	redirect: 'chatroom',
	// 	component: Home
	// },
	{
		path: '/',
		name: 'chatroom',
		component: Home
	},
	/**
	 * 文章模块
	 */
	{
		path: '/artic',
		component: RouteView,
		children: [
			/**
			 * 文章详情
			 * path: /artic/detail
			 */
			{
				path: 'detail',
				name: 'artic-detail',
				component: ArticDetail
			}
		]
	}
];
export default RorterList;
