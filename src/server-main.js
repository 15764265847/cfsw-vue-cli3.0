import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import App from './App.vue'
import router from './router/index';

export default () => new Promise((resolve) => {
  const app = createSSRApp(App).use(router);

  renderToString(app).then(html => {
    // console.log('vue server render: ', html)
    resolve(html);
  })
});