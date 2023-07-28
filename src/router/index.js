import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home-Page.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About-Page.vue'),
    },
    {
      path: '/testing',
      name: 'testing',
      component: () => import('../views/__testing__.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound404.vue'),
    },
  ],
});

export default router;
