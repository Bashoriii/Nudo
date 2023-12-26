import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About-Page.vue';
import Hoodie from '../views/catalogPage/hoodieSection/Catalog-Hoodie.vue';
import Tshirt from '../views/catalogPage/tshirtSection/Catalog-Tshirt.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      // About kayanya gak pake
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/hoodie',
      component: Hoodie,
    },
    {
      path: '/t-shirt',
      component: Tshirt,
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
