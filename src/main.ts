import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VueRescroll from '@src/lib/vue-rescroll';

// store.subscribe((op) => {
// 	console.log('我是订阅');
// 	console.log(op);
// });

createApp(App)
	.use(router)
	.use(store)
	.use(VueRescroll)
	.mount('#app');
