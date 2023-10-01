import Vue from "vue"
import VueRouter from "vue-router"

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
      },
    {
        path: '/about',
        name: 'about',
        component: About,        
    },
    {
        path: '*',
        component: () => import('@/views/Error.vue')
      }
]

const router = new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes
})

export default router