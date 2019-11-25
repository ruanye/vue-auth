import Vue from 'vue';
import Vuex from 'vuex';
import route from './moudle/route';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hasPermisson: false, // 初始化设置用户没有获取过权限
  },
  mutations: {},
  actions: {},
  modules: {
    route,
  },
});
