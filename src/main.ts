import App from './App'
import { createSSRApp } from 'vue'
import { createRouter } from './router';
import Store from './store';

import VueRescroll from '@wefly/vue-rescroll';
import VueImageLazyLoad from '@wefly/vue-image-lazy-load';


export function createApp() {
  const app = createSSRApp(App);
  const router = createRouter();
  const store = new Store();
  app.use(router)
     .use(store)
     .use(VueRescroll)
     .use(VueImageLazyLoad);
  return { app, router };
}