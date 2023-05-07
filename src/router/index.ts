import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'car',
    name: 'Root'
  },
  {
    path: '/car',
    name: 'car',
    meta: {
      title: 'car',
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/pages/three/carShow.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/pages/login/loginIndex.vue')
  },
  {
    path: '/test',
    name: 'Test',
    meta: {
      title: '测试',
      keepAlive: false,
      requireAuth: false
    },
    component: () => import('@/pages/test/testVueuse.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
