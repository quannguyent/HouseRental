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
    path: "/room",
    name: 'Room',
    component: () => import('../views/room/roomTable.vue')
    
  },
  {
    path: "/room/new",
    name: 'RoomNew',
    component: () => import('../views/room/formRoom.vue')
  },
  {
    path: "/room/:id",
    name: 'RoomEdit',
    component: () => import('../views/room/formRoom.vue')
  },
  {
    path: "/roomSearch",
    name: 'RoomSearch',
    component: () => import('../views/room/roomSearch.vue')
  },
  {
    path: "/roomDetail/:id",
    name: 'RoomDetail',
    component: () => import('../views/room/roomDetail.vue')
  },
]

const router = new VueRouter({
  routes,
  mode : 'history'
})

export default router
