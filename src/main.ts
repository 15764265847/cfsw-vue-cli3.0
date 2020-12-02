import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VueRescroll from 'vue-rescroll';

createApp(App)
	.use(router)
	.use(store)
	.use(VueRescroll)
	.mount('#app');
