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
import * as note from '@/views/admin/note/noteIndex.js'
import * as anneeScolaire from '@/views/admin/setting/annees_scolaire/anneeScolaireIndex.js'
import * as matiere from '@/views/admin/setting/matiere/matiereIndex.js'
import * as salle from '@/views/admin/setting/salle/salleIndex.js'
import * as trimestre from '@/views/admin/setting/trimestre/trimestre.js'
import * as edt from '@/views/admin/emploiDuTemps/indexEDT.js'
import * as badge from '@/views/admin/badge/indexBadge.js'


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
        },
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
        { path: 'classe/:idClasse/listeEleves', name: 'listeEleves', component: classe.listeEleveParClasse },
        { path: 'tableau', name: 'tableau', component: admin.Tableau },
        { path: 'classe/6eme', name: 'classeUn', component: classe.ClasseUn },
        { path: 'classe/listeClasse', name: 'listeClasse', component: classe.ListeClasse },
        { path: 'classe/listeEleveParClasse', name: 'listeEleveParClasse', component: classe.listeEleveParClasse },
        { path: 'classe/bulletin', name: 'bulletinClasse', component: bulletin.BulletinIndex },
        { path: 'stripe/payment', name: 'stripePayment', component: payment.StripeChechout },
        { path: 'note/elevesListe', name: 'noteEleveList', component: note.IndexNote },
        { path: 'note/eleve', name: 'noteEleve', component: note.NoteEleve },
        { path: 'anneeScolaire', name: 'anneeScolaire', component: anneeScolaire.ListeAnneeScolaire },
        { path: 'matiere', name: 'matiere', component: matiere.ListeMatiere },
        { path: 'salle', name: 'salle', component: salle.ListeSalle },
        { path: 'trimestre', name: 'trimestre', component: trimestre.ListeTrimestre },
        { path: 'eleve/elevesInscrit', name: 'elevesInscrit', component: eleve.ElevesInscrit },
        { path: 'badge/badgeEleve', name: 'elevesBadge', component: badge.ElevesBadge },
        { path: 'badge/createBadgeEleve/:id', name: 'createBadgeEleve', component: badge.CreateBadgeEleve },
        { path: 'note/selectEleve', name: 'selectEleve', component: note.SelectEleve },
        { path: 'note/listeEleveSelectionner', name: 'listeEleveSelectionner', component: note.ListeEleveSelectionner },
        // { path: 'edt', name: 'edt', component: edt.Edt },

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
