import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);
// 动态路由
export const routerMap = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'home_index',
        name: 'home_index',
        component: () => import('../views/HomeInex.vue'),
      },
    ],
  },

  {
    path: '/count-to',
    name: 'count_to',
    component: () => import('../views/ContTo.vue'),
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import('../views/upload.vue'),
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('../views/form.vue'),
  },

  {
    path: '/store',
    name: 'store',
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
    path: '/*',
    component: () => import('../views/error_404.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
