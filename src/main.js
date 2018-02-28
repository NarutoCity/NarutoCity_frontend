import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import ElementUI from 'element-ui'
import App from './App.vue'
import routerConfig from './router.config'
import store from  './store/store'

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
const router = new VueRouter(routerConfig);

new Vue({
  el: '#app',
  router,  // 把路由注入到根实例中
  store,
  render: h => h(App)
});
