/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/components/HelloWorld.vue')
    },
    {
      path: '/404',
      component: () => import('@/pages/NotFoundPage.vue')
    }
  ]
})

export default router
