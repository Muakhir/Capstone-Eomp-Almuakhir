import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',

    component: () => import('../views/Products.vue')
  },
  {
    path: '/admin',
    name: 'admin',

    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/contact',
    name: 'contact',

    component: () => import('../views/Contact.vue')
  },
  {
    path: '/login',
    name: 'login',

    component: () => import('../views/loginView.vue')
  },
{
  path: '/product/:id',
  name: 'product',
  component: () => import( '../views/ProductView.vue')
},
{
  path: '/signup',
  name: 'signup',
  component: () => import( '../views/signupView.vue')
},
{
  path: '/Profile',
  name: 'Profile',
  component: () => import( '../views/ProfileView.vue')
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

