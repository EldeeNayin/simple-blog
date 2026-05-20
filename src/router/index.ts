import { createRouter, createWebHistory } from 'vue-router'

const homePage = () => import('@/views/homePage.vue')
const detailsPage = () => import('@/views/detailsPage.vue')
const NotFound = () => import('@/views/notFoundPage.vue')
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage,
    },
    {
      path: '/details/:id',
      name: 'details',
      component: detailsPage,
      props: true, // This allows the ID to be passed directly as a prop to your component
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
  ],
})

export default router