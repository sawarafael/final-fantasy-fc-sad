import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'pillars', component: () => import('pages/Pillars.vue') },
      { path: 'news', component: () => import('pages/News.vue') },
      { path: 'RP', component: () => import('pages/RP.vue') },
      { path: 'alliances', component: () => import('pages/Aliances.vue') }
    ]
  },

];

export default routes;
