import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/eventos',
    component: () => import('../views/EventosPage.vue')
  },
  {
    path: '/eventos/:id',
    component: () => import('../views/EventoDetalhePage.vue')
  },
  {
    path: '/favoritos',
    component: () => import('../views/FavoritosPage.vue')
  },
  {
    path: '/perfil',
    component: () => import('../views/PerfilPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
