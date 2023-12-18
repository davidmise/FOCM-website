import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceDetails from '../views/ServiceDetailsView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
    {
      path: '/ServiceDetails ',
      name: 'ServiceDetails ',
      component: ServiceDetails 
    },

 
   
  ]
})

export default router
