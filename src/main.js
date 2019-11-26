/* eslint-disable no-unused-expressions */
import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';

// eslint-disable-next-line global-require
if (process.env.NODE_ENV === 'development') require('./mock');

Vue.directive('has', {
  // eslint-disable-next-line no-unused-vars
  inserted(el, bindings, vnode) {
    const { value } = bindings;
    console.log(value);
    // 从vuex里面找到按钮的true/false
    const flag = vnode.context.$store.state.route.btnPermission[value];
    console.log(flag);
    // 如果flag是false 就从当前文档删除
    !flag && el.parentNode.removeChild(el);
  },
});

// 路由钩子
router.beforeEach(async (to, from, next) => {
  // 如果没有获取过权限，则获取路由权限
  if (!store.state.hasPermisson) {
    // 发送请求获取权限
    // eslint-disable-next-line no-unused-vars
    const newRouter = await store.dispatch('route/getAuthRoute');
    // vue-router Api 提供的动态添加路由的方法
    router.addRoutes(newRouter);
    next({ ...to, replace: true });
  } else {
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
