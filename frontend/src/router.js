import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './pages/Dashboard.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/auth/login',
      name: "auth.login",
      component: () => import('./pages/auth/login.vue')
    },
    {
      path: '/product',
      name: "product.index",
      component: () => import('./pages/product/index.vue')
    },
    {
      path: '/product/create',
      name: "product.create",
      component: () => import('./pages/product/create.vue')
    },
  ]
})

export default router
