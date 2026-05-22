import { createRouter, createWebHistory } from 'vue-router'
import ProductsPage from '@/pages/ProductsPage.vue'

const routes = [
  {
    path: '/',
    name: 'products',
    component: ProductsPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
