import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import Home from '../views/Home.vue'
import api from '../services/index'

const handleAuthorizedRouteNavigation = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
) => {
 
  const token = localStorage.getItem('token')
  const isAuthenticated = await api.verifyToken()
  if (!isAuthenticated.data.isTokenValid) {
    return { name: 'register' }
  }
}

const handleUnAuthorizedRouteNavigation = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
) => {
  const isAuthenticated = await api.verifyToken()
  if (isAuthenticated.data.isTokenValid) {
    return { name: 'budget' }
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/budget',
      name: 'budget',
      component: () => import('../views/AllBudgets.vue'),
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/CreateView.vue'),
      
    },
    {
      path: '/activities/:id',
      name: 'activities',
      component: () => import('../views/Activity.vue'),
  
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: () => import('../views/Notifications.vue')
    },
    {
      path: '/search' ,
      name: 'search',
      component: () => import('../views/Search.vue')
    }
  ]
})

export default router
