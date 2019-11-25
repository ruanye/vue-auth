import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';

// eslint-disable-next-line global-require
if (process.env.NODE_ENV === 'development') require('./mock');
// 路由钩子
router.beforeEach((to, from, next) => {
  // 如果没有获取过权限，则获取路由权限
  if (!store.state.hasPermisson) {
    // 发送请求获取权限
    store.dispatch('route/getAuthRoute');
    next();
  }
});
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
