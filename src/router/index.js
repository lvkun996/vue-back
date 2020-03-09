import Vue from 'vue'
import VueRouter from 'vue-router'

import { getItem } from '@/utils/storeage.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const toekn = getItem('token')
  if (!toekn) return next('/login')
  next()
})

export default router
