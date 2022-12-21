import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/product/add',
    name: 'addProduct',
    component: () => import('../views/AddProductView.vue')
  },
  {
    path: '/product/update',
    name: 'updateProduct',
    component: () => import('../views/UpdateProductView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/balance/add',
    name: 'addBalance',
    component: () => import('../views/AddBalanceView.vue')
  },
  {
    path: '/product/buy',
    name: 'buyProduct',
    component: () => import('../views/BuyProductView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
