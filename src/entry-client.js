import { createApp } from './main'
import VueRescroll from '@wefly/vue-rescroll';
import VueImageLazyLoad from '@wefly/vue-image-lazy-load';

const { app, router } = createApp()

// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
  app.use(VueRescroll)
     .use(VueImageLazyLoad)
     .mount('#app');
})