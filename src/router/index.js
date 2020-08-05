import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Renew from '../views/Renew.vue'
import Profile from '../views/Profile'
import Payment from '../views/Payment'
import Tracker from '../views/Tracker'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Renew',
    name: 'Renew',
    component: Renew
  },
  {
    path: '/Data-page',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/Payment',
    name: 'Payment',
    component: Payment
  },
  {
    path: '/Tracker',
    name: 'Tracker',
    component: Tracker
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
