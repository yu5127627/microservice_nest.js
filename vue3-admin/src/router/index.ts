import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/components/layout/index.vue';

export const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/login.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: { title: '仪表盘', icon: 'house', affix: true },
    alwaysShow: true,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/dashboard.vue'),
        meta: { title: '仪表盘', icon: 'house', affix: true }
      },
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(), // history 模式则使用 createWebHistory()
  routes
});

export default router;
