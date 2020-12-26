import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue') 
  },
  {
    path: "/login",
    name: 'Login',
    component: () => import('../views/Login.vue')
    
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/account',
    name: 'UserAccount',
    component: () => import('../views/UserAccount.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/room',
    name: 'room',
    component: () => import('../views/Admin.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
