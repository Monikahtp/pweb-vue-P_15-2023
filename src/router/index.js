import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import task from '@/components/taskDetail.vue'
import Error from '../views/Error.vue';
import about from '../views/About.vue'
import taskdy from '../components/taskDetail-dy.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: "/:taskId",
    name: 'dynamic',
    component: taskdy
  },
  {
    path: '/:catchAll(.*)',
    name: 'Not Found',
    component: Error
  },
  {
    path: '/error',
    name: 'error',
    component: Error
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router