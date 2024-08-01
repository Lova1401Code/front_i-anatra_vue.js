<template>
  <div class="left-side-bar">
    <div class="brand-logo">
      <a href="index.html">
        <img
          src="/assets/vendors/images/deskapp-logo.svg"
          alt=""
          class="dark-logo"
        />
        <img
          src="/assets/vendors/images/deskapp-logo-white.svg"
          alt=""
          class="light-logo"
        />
      </a>
      <div class="close-sidebar" data-toggle="left-sidebar-close">
        <i class="ion-close-round"></i>
      </div>
    </div>
    <div class="menu-block customscroll">
      <div class="sidebar-menu">
        <ul id="accordion-menu">
          <li class="dropdown">
            <a href="javascript:;" class="dropdown-toggle">
              <span class="micon dw dw-house-1"></span
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
              <span class="micon dw dw-edit2"></span
              ><span class="mtext">Eleve</span>
            </a>
            <ul class="submenu">
              <li>
                <RouterLink to="/admin/eleve/eleves-en-attente"
                  >Liste des Eleves</RouterLink
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
              <span class="micon dw dw-library"></span
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
              <span class="micon dw dw-library"></span
              ><span class="mtext">Emploi du temps</span>
            </a>
            <ul class="submenu">
              <li>
                <RouterLink to="/admin/enseignant/edt">Enseignant</RouterLink>
              </li>
              <li>
                <RouterLink to="/admin/enseignant/edt">Eleve</RouterLink>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="javascript:;" class="dropdown-toggle">
              <span class="micon dw dw-apartment"></span
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
              <span class="micon dw dw-paint-brush"></span
              ><span class="mtext">Présence</span>
            </a>
            <ul class="submenu">
              <li><a href="font-awesome.html">FontAwesome Icons</a></li>
              <li><a href="foundation.html">Foundation Icons</a></li>
              <li><a href="ionicons.html">Ionicons Icons</a></li>
              <li><a href="themify.html">Themify Icons</a></li>
              <li><a href="custom-icon.html">Custom Icons</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="javascript:;" class="dropdown-toggle">
              <span class="micon dw dw-analytics-21"></span
              ><span class="mtext">Badge</span>
            </a>
            <ul class="submenu">
              <li><a href="highchart.html">Highchart</a></li>
              <li><a href="knob-chart.html">jQuery Knob</a></li>
              <li><a href="jvectormap.html">jvectormap</a></li>
              <li><a href="apexcharts.html">Apexcharts</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="javascript:;" class="dropdown-toggle">
              <span class="micon dw dw-right-arrow1"></span
              ><span class="mtext">Note</span>
            </a>
            <ul class="submenu">
              <li><a href="video-player.html">Video Player</a></li>
              <li><a href="login.html">Login</a></li>
              <li><a href="forgot-password.html">Forgot Password</a></li>
              <li><a href="reset-password.html">Reset Password</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="javascript:;" class="dropdown-toggle">
              <span class="micon dw dw-browser2"></span
              ><span class="mtext">Bulletin</span>
            </a>
            <ul class="submenu">
              <li><a href="400.html">400</a></li>
              <li><a href="403.html">403</a></li>
              <li><a href="404.html">404</a></li>
              <li><a href="500.html">500</a></li>
              <li><a href="503.html">503</a></li>
            </ul>
          </li>

          <li class="dropdown">
            <a href="javascript:;" class="dropdown-toggle">
              <span class="micon dw dw-copy"></span
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
              <span class="micon dw dw-list3"></span
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