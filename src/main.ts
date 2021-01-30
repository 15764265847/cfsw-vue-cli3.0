import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VueRescroll from '@wefly/vue-rescroll';
import VueImageLazyLoad from '@wefly/vue-image-lazy-load';

// store.subscribe((op) => {
// 	console.log('我是订阅');
// 	console.log(op);
// });

const app = createApp(App)
	.use(router)
	.use(store)
	.use(VueRescroll)
	.use(VueImageLazyLoad)
	.mount('#app');
console.log(app, 'ttttttttttttttttttt');

// ./App.vue
export default ({ __scopeId }: any) => {
	// 这里可以取到 __scopeId
	console.log(__scopeId, 'ccccccccccccccccc');
};
