<template>
  <div class="left-side-bar">
    <div class="brand-logo" style="padding-top: 70px">
      <a href="index.html">
        <img
          src="/assets/vendors/images/logosite.png"
          alt=""
          class="dark-logo"
        />
        <img
          src="/assets/vendors/images/logosite.png"
          alt=""
          class="light-logo"
        />
      </a>
      <div class="close-sidebar" data-toggle="left-sidebar-close">
        <i class="ion-close-round"></i>
      </div>
    </div>
    <div class="menu-block customscroll" style="padding-top: 40px">
      <div class="sidebar-menu">
        <ul id="accordion-menu">
          <li class="dropdown">
            <a href="javascript:;" class="dropdown-toggle">
              <span class="micon dw dw-house-1 bg-info"></span
              ><span class="mtext">Home</span>
            </a>
            <ul class="submenu">
              <li>
                <RouterLink to="/admin/dashboard">Dashboard</RouterLink>
              </li>
              <li><a href="index2.html">Dashboard style 2</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="javascript:;" class="dropdown-toggle">
              <span class="micon dw dw-user-3 bg-info"></span
              ><span class="mtext">Eleve</span>
            </a>
            <ul class="submenu">
              <li>
                <RouterLink to="/admin/eleve/eleves-en-attente"
                  >Liste globale</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/admin/eleve/eleves-en-attente"
                  >Liste par classe</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/admin/eleve/eleves-en-attente"
                  >Liste par Periode</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/admin/eleve/inscription"
                  >inscription eleve</RouterLink
                >
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="javascript:;" class="dropdown-toggle">
              <span class="micon dw dw-conference bg-info"></span
              ><span class="mtext">Enseignant</span>
            </a>
            <ul class="submenu">
              <li>
                <RouterLink to="/admin/eleve/eleves-en-attente"
                  >Nouveau</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/admin/eleve/eleves-en-attente"
                  >Liste</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/admin/eleve/eleves-en-attente"
                  >Liste par classe</RouterLink
                >
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="javascript:;" class="dropdown-toggle">
              <span class="micon dw dw-user3 bg-info"></span
              ><span class="mtext">Utilisateur</span>
            </a>
            <ul class="submenu">
              <li>
                <RouterLink to="/admin/user/index"
                  >Liste des utilisateurs</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/admin/user/add">Ajout Utilisateur</RouterLink>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="javascript:;" class="dropdown-toggle">
              <span class="micon dw dw-open-book bg-info"></span
              ><span class="mtext">Cahier de texte</span>
            </a>
            <ul class="submenu">
              <li>
                <RouterLink to="/admin/enseignant/edt">Remplissage</RouterLink>
              </li>
              <li>
                <RouterLink to="/admin/enseignant/edt">Consultation</RouterLink>
              </li>
            </ul>
          </li>

          <li class="dropdown">
            <a href="javascript:;" class="dropdown-toggle">
              <span class="micon dw dw-calendar1 bg-info"></span
              ><span class="mtext">Emploi du temps</span>
            </a>
            <ul class="submenu">
              <li><a href="contact-directory.html">Contact Directory</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="blog-detail.html">Blog Detail</a></li>
              <li><a href="product.html">Product</a></li>
            </ul>
          </li>

          <li class="dropdown">
            <a href="javascript:;" class="dropdown-toggle">
              <span class="micon dw dw-money-1 bg-info"></span
              ><span class="mtext"> Scolarité </span>
            </a>
            <ul class="submenu">
              <li>
                <Router-link to="/admin/classe/listeClasse"
                  >Fixation des montants</Router-link
                >
              </li>
              <li>
                <Router-link to="/admin/classe/listeEleveParClasse"
                  >Nouveau règlement</Router-link
                >
              </li>
              <li>
                <Router-link to="/admin/classe/listeEleveParClasse"
                  >Règlements par éleves</Router-link
                >
              </li>
              <li>
                <Router-link to="/admin/classe/listeEleveParClasse"
                  >Eleves en retard de règlement</Router-link
                >
              </li>
              <li>
                <Router-link to="/admin/classe/listeEleveParClasse"
                  >Eleves ayant tout reglé</Router-link
                >
              </li>
              <li>
                <Router-link to="/admin/classe/listeEleveParClasse"
                  >Statistique</Router-link
                >
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="javascript:;" class="dropdown-toggle">
              <span class="micon dw dw-property bg-info"></span
              ><span class="mtext"> Classe </span>
            </a>
            <ul class="submenu">
              <li>
                <Router-link to="/admin/classe/listeClasse"
                  >Liste des classes</Router-link
                >
              </li>
              <li>
                <Router-link to="/admin/classe/listeEleveParClasse"
                  >Eleves par classe</Router-link
                >
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="javascript:;" class="dropdown-toggle">
              <span class="micon dw dw-checked bg-info"></span
              ><span class="mtext">Présence</span>
            </a>
            <ul class="submenu">
              <li>
                <Router-link to="/admin/classe/listeEleveParClasse"
                  >Eleves par classe</Router-link
                >
              </li>
              <li>
                <Router-link to="/admin/classe/listeEleveParClasse"
                  >Consultation des absences</Router-link
                >
              </li>

              <li>
                <Router-link to="/admin/classe/listeEleveParClasse"
                  >Justification d'absence</Router-link
                >
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="javascript:;" class="dropdown-toggle">
              <span class="micon dw dw-id-card bg-info"></span
              ><span class="mtext">Badge</span>
            </a>
            <ul class="submenu">
              <li>
                <Router-link to="/admin/badge/badgeEleve"
                  >Badge pour l'élève</Router-link
                >
              </li>
              <li>
                <Router-link to="/admin/badge/badgeEleve"
                  >Badge pour l'enseignant</Router-link
                >
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="javascript:;" class="dropdown-toggle">
              <span class="micon dw dw-pen bg-info"></span
              ><span class="mtext">Notes</span>
            </a>
            <ul class="submenu">
              <li>
                <Router-link to="/admin/note/selectEleve"
                  >Enregistrement des notes</Router-link
                >
              </li>
              <li>
                <Router-link to="/admin/classe/listeEleveParClasse"
                  >Consultation des evaluations</Router-link
                >
              </li>
              <li>
                <Router-link to="/admin/classe/listeEleveParClasse"
                  >Consultation des Moyennes</Router-link
                >
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="javascript:;" class="dropdown-toggle">
              <span class="micon dw dw-notebook bg-info"></span
              ><span class="mtext">Bulletin de notes</span>
            </a>
            <ul class="submenu">
              <li>
                <Router-link to="/admin/classe/listeEleveParClasse"
                  >Consultation</Router-link
                >
              </li>
              <li>
                <Router-link to="/admin/classe/listeEleveParClasse"
                  >Tablette des notes</Router-link
                >
              </li>

              <li>
                <Router-link to="/admin/classe/listeEleveParClasse"
                  >Statistique des moyennes</Router-link
                >
              </li>
            </ul>
          </li>

          <li class="dropdown">
            <a href="javascript:;" class="dropdown-toggle">
              <span class="micon dw dw-video-camera bg-info"></span
              ><span class="mtext">Réunion</span>
            </a>
            <ul class="submenu">
              <li><a href="blank.html">Blank</a></li>
              <li><a href="contact-directory.html">Contact Directory</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="blog-detail.html">Blog Detail</a></li>
              <li><a href="product.html">Product</a></li>
              <li><a href="product-detail.html">Product Detail</a></li>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="profile.html">Profile</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a href="pricing-table.html">Pricing Tables</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="javascript:;" class="dropdown-toggle">
              <span class="micon dw dw-list3 bg-info"></span
              ><span class="mtext">Discrussion</span>
            </a>
            <ul class="submenu">
              <li><a href="javascript:;">Level 1</a></li>
              <li><a href="javascript:;">Level 1</a></li>
              <li><a href="javascript:;">Level 1</a></li>
              <li class="dropdown">
                <a href="javascript:;" class="dropdown-toggle">
                  <span class="micon fa fa-plug"></span
                  ><span class="mtext">Level 2</span>
                </a>
                <ul class="submenu child">
                  <li><a href="javascript:;">Level 2</a></li>
                  <li><a href="javascript:;">Level 2</a></li>
                </ul>
              </li>
              <li><a href="javascript:;">Level 1</a></li>
              <li><a href="javascript:;">Level 1</a></li>
              <li><a href="javascript:;">Level 1</a></li>
            </ul>
          </li>
          <li>
            <a href="sitemap.html" class="dropdown-toggle no-arrow">
              <span class="micon dw dw-diagram"></span
              ><span class="mtext">Programme</span>
            </a>
          </li>
          <li>
            <a href="chat.html" class="dropdown-toggle no-arrow">
              <span class="micon dw dw-chat3"></span
              ><span class="mtext">Chat</span>
            </a>
          </li>
          <li>
            <a href="invoice.html" class="dropdown-toggle no-arrow">
              <span class="micon dw dw-invoice"></span
              ><span class="mtext">Invoice</span>
            </a>
          </li>
          <li>
            <div class="dropdown-divider"></div>
          </li>
          <li>
            <div class="sidebar-small-cap">Extra</div>
          </li>
          <li>
            <a href="javascript:;" class="dropdown-toggle">
              <span class="micon dw dw-edit-2"></span
              ><span class="mtext">Documentation</span>
            </a>
            <ul class="submenu">
              <li><a href="introduction.html">Introduction</a></li>
              <li><a href="getting-started.html">Getting Started</a></li>
              <li><a href="color-settings.html">Color Settings</a></li>
              <li>
                <a href="third-party-plugins.html">Third Party Plugins</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="https://dropways.github.io/deskapp-free-single-page-website-template/"
              target="_blank"
              class="dropdown-toggle no-arrow"
            >
              <span class="micon dw dw-paper-plane1"></span>
              <span class="mtext"
                >Landing Page
                <img
                  src="/assets/vendors/images/coming-soon.png"
                  alt=""
                  width="25"
              /></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavLeft",
};
</script>
<style>
</style>