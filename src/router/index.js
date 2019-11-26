import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);
// 动态路由
export const routerMap = [
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页',
    },
    component: Home,
    children: [
      {
        path: '/home_index',
        name: 'home_index',
        meta: {
          title: '首页1',
        },
        component: () => import('../views/HomeInex.vue'),
      },
    ],
  },

  {
    path: '/count-to',
    name: 'count_to',
    meta: {
      title: '计数器',
    },
    component: () => import('../views/ContTo.vue'),
  },
  {
    path: '/upload',
    name: 'upload',
    meta: {
      title: '上传',
    },
    component: () => import('../views/upload.vue'),
  },
  {
    path: '/form',
    name: 'form',
    meta: {
      title: '表单',
    },
    component: () => import('../views/form.vue'),
  },

  {
    path: '/store',
    name: 'store',
    meta: {
      title: '商店',
    },
    component: () => import('../views/store.vue'),
  },
];
// 默认大家都能访问的路由
export const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '*',
    // name: 'error',
    component: () => import('../views/error_404.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
