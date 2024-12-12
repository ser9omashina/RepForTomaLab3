import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import UsersPage from '../pages/UsersPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import MoviesPage from '../pages/MoviesPage.vue'; // импортируем MoviesPage
import TicketsPage from '../pages/TicketsPage.vue'; // импортируем TicketsPage

const routes: Array<RouteRecordRaw> = [
  {
    path: '/users',
    name: 'users-page',
    component: UsersPage,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/movies',
    name: 'movies-page',
    component: MoviesPage, // добавляем маршрут для MoviesPage
  },
  {
    path: '/tickets',
    name: 'tickets-page',
    component: TicketsPage, // добавляем маршрут для TicketsPage
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;