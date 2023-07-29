import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '../views/BudgetView.vue'
import LoginView from '../views/Login.vue'
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
      component: HomeView
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
      component: () => import('../views/BudgetView.vue'),
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/CreateView.vue'),
      
    },
    {
      path: '/activities/:id',
      name: 'activities',
      component: () => import('../views/ActivitiesView.vue'),
  
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
    }
  ]
})

export default router
