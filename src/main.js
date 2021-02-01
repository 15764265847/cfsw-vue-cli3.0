import { createSSRApp } from 'vue'
import App from './App.vue'
// import MyTest from './components/MyTest.vue';


export default () => createSSRApp(App);


// const Vue = require('vue');
// const serverRenderer = require('@vue/server-renderer')
// const app = Vue.createSSRApp({
//     template: '<div>1111111111111111111111111111111</div>'
// })

// serverRenderer.renderToString(app).then(html => {
//     console.log('vue server render: ', html)
// })