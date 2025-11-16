import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/products', name: 'products', component: Products, props: true }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
