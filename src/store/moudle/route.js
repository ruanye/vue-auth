// store/moudle/route.js 管理路由的vuex
import { getAuth } from '../../api';
// 引入我们的动态路由列表
import { routerMap } from '../../router';
// 过滤需要路由的方法
// eslint-disable-next-line no-unused-vars
function getAccesRouterList(routes, authlist) {
  return routes.filter((route) => {
    if (authlist.rules.page[route.name]) {
      return true;
    }
    return false;
  });
}
const state = {};
const actions = {
  async getAuthRoute() {
    try {
      // 获取后台返回的权限列表
      // eslint-disable-next-line no-unused-vars
      const authList = await getAuth();
      // 根据权限列表来过滤出我需要的路由列表
      // eslint-disable-next-line no-unused-vars
      const needRouter = getAccesRouterList(routerMap, authList);
      console.log(needRouter);
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
