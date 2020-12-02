const Index = () => import('@src/views/index.vue');

const context: __WebpackModuleApi.RequireContext = require.context(
	'../modules',
	true,
	/routes.ts$/
);

import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'index',
		component: Index
	}
];

context.keys().forEach((path) => {
	routes.push.call(routes, ...context(path).default);
});
export default routes;
