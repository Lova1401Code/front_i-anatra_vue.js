import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import Login from '@/views/path/Login.vue'

import * as Public from '@/views/public/indexPublic.js'
import * as admin from '@/views/admin/indexAdmin.js'

import { auth_guard } from '@/_helpers/auth-guard.js';

localStorage.setItem('token', 'dkjfl')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: Public.PublicLayout,
      children: [
        { path: '/', name: 'home', component: Public.Home },
        {
          path: '/home', name: 'home1', component: Public.HomeView
        },
        { path: '/coctail', name: 'coctail', component: Public.Coctail },
        {
          path: '/contact', name: 'conctact', component: Public.Contact
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin.AdminLayout,
      children: [
        { path: 'dashboard', name: 'dashboard', component: admin.Dashboard },
        { path: 'user/index', name: 'userIndex', component: admin.UserIndex },
        { path: 'user/edit/:id(\\d+)', name: 'userEdit', component: admin.UserEdit, props: true },
        { path: 'user/add', name: 'userAdd', component: admin.UserAdd },
        { path: 'cocktail/index', name: 'cocktailIndex', component: admin.CocktailIndex },
        { path: 'cocktail/edit/:id', name: 'cocktailEdit', component: admin.CocktailEdit, props: true },
        { path: 'cocktail/add', name: 'cocktailAdd', component: admin.CocktailAdd }
      ]
    },

    {
      path: '/:pathMatch(.*)*', component: NotFound
    },
    {
      path: '/login', name: 'login', component: Login, beforeEnter: auth_guard
    }

  ]
})

export default router
