import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import Login from '@/views/path/Login.vue'
import Login2 from '@/views/path/Login2.vue'

import * as Public from '@/views/public/indexPublic.js'
import * as admin from '@/views/admin/indexAdmin.js'
import * as eleve from '@/views/admin/eleves/indexEleve.js'
import * as enseignant from '@/views/admin/enseignant/indexEnseignant.js'
import * as classe from '@/views/classe/indexClasse.js'
import * as bulletin from '@/views/admin/bulletin/indexBulletin.js'
import * as payment from '@/views/admin/payment/paymentIndex.js'

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
        { path: '/', name: 'chat', component: Public.Chat },
        {
          path: '/home', name: 'home', component: Public.Home
        },
        { path: '/coctail', name: 'coctail', component: Public.Coctail },
        {
          path: '/contact', name: 'conctact', component: Public.Contact
        },
        {
          path: '/Accueil', name: 'acceuil', component: Public.Accueil
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
        { path: 'user/profil', name: 'userProfil', component: admin.UserProfil },
        { path: 'cocktail/index', name: 'cocktailIndex', component: admin.CocktailIndex },
        { path: 'cocktail/edit/:id', name: 'cocktailEdit', component: admin.CocktailEdit, props: true },
        { path: 'cocktail/add', name: 'cocktailAdd', component: admin.CocktailAdd },
        { path: 'eleve/inscription', name: 'inscription', component: eleve.Inscription },
        { path: 'enseignant/edt', name: 'edt', component: enseignant.EmploiDuTemps },
        { path: 'eleve/eleves-en-attente', name: 'elevesEnAttente', component: eleve.ElevesEnAttente },
        { path: 'eleve/:idEleve/eleve-details', name: 'eleveDetails', component: eleve.ElevesDetails },
        { path: 'tableau', name: 'tableau', component: admin.Tableau },
        { path: 'classe/6eme', name: 'classeUn', component: classe.ClasseUn },
        { path: 'classe/bulletin', name: 'bulletinClasse', component: bulletin.BulletinIndex },
        { path: 'stripe/payment', name: 'stripePayment', component: payment.StripeChechout }

      ]
    },

    {
      path: '/:pathMatch(.*)*', component: NotFound
    },
    {
      path: '/login', name: 'login', component: Login, beforeEnter: auth_guard
    },
    {
      path: '/login2', name: 'login2', component: Login2,
    }

  ]
})

export default router
