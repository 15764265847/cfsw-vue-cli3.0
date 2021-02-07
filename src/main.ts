import { createApp, ComponentPublicInstance } from 'vue';
import App from './App';
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

window.app = app;

declare global {
	interface Window {
		app: ComponentPublicInstance;
	}
}
