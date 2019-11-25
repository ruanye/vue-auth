// store/moudle/route.js 管理路由的vuex
import { getAuth } from '../../api';

const state = {};
const actions = {
  async getAuthRoute() {
    try {
      // 获取后台返回的权限列表
      // eslint-disable-next-line no-unused-vars
      const authList = await getAuth();
      // 根据权限列表来过滤出我需要的路由列表
    } catch (e) {
      console.log(e);
    }
  },
};
const mutations = {};
export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
