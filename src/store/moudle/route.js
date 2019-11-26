/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
// store/moudle/route.js 管理路由的vuex
import { getAuth } from '../../api';
// 引入我们的动态路由列表
import { routerMap } from '../../router';
// 过滤需要路由的方法
function getAccesRouterList(routes, page) {
  return routes.filter((route) => {
    if (page[route.name]) {
      // 如果有子路由递归判断子路由权限 判断子路由是否有权限
      if (route.children) route.children = getAccesRouterList(route.children, page);
      return true;
    }
    return false;
  });
}

const state = {
  menuList: [],
  btnPermission: {
    edit_button: true, // 组件权限
    dele_button: true,
  },
};
const actions = {
  async getAuthRoute({ commit }) {
    let needRouter;
    // eslint-disable-next-line no-unused-vars
    let menuList;

    try {
      // 获取后台返回的权限列表
      // eslint-disable-next-line no-unused-vars
      const authList = await getAuth();
      const {
        rules: {
          page,
          // eslint-disable-next-line camelcase
          component: { edit_button, dele_button },
        },
      } = authList;
      //  根据接口设置按钮权限
      commit('setComp', { edit_button, dele_button });
      // 根据权限列表来过滤出我需要的路由列表
      // eslint-disable-next-line no-unused-vars
      needRouter = getAccesRouterList(routerMap, page);
      // 把权利路由列表放在store.state下面
      commit('setMenulist', needRouter);
      // 已经获取过权限了，修改获取权限的状态
      commit('setPermisson', null, { root: true });
    } catch (e) {
      console.log(e);
    }
    return needRouter;
  },
};
const mutations = {
  // eslint-disable-next-line no-shadow
  setMenulist(state, routes) {
    state.menuList = routes;
  },
  setComp(state, payload) {
    state.btnPermission.edit_button = payload.edit_button;
    state.btnPermission.dele_button = payload.dele_button;
  },
};
export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
