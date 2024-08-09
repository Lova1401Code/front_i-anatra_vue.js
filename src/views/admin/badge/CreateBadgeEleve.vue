<template>
  <div class="pd-ltr-20 xs-pd-20-10">
    <div class="min-height-200px">
      <div class="page-header">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="title">
              <h4>DataTable</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html">Accueil</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Eleves Inscrit
                </li>
              </ol>
            </nav>
          </div>
          <div class="col-md-6 col-sm-12 text-right">
            <div class="dropdown">
              <a
                class="btn btn-primary dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
              >
                January 2018
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="#">Export List</a>
                <a class="dropdown-item" href="#">Policies</a>
                <a class="dropdown-item" href="#">View Assets</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-sm-12 mb-30">
          <div class="card text-white bg-info card-box">
            <div class="card-body">
              <div class="row">
                <div class="col-md-2">
                  <a href=""
                    ><i class="icon-copy fa fa-calendar"></i
                    ><Router-link to="/admin/eleve/eleves-en-attente"
                      ><b> Eleves en attentes</b></Router-link
                    >
                  </a>
                </div>
                <div class="col-md-2">
                  <a href=""
                    ><i class="icon-copy fa fa-calendar"></i
                    ><Router-link to="/admin/eleve/elevesInscrit"
                      ><b> Eleves inscrit </b></Router-link
                    >
                  </a>
                </div>
                <div class="col-md-2">
                  <a href=""
                    ><i class="icon-copy fa fa-calendar"></i
                    ><Router-link to="/admin/salle"
                      ><b> Eleves renvoyé</b></Router-link
                    >
                  </a>
                </div>
                <div class="col-md-2">
                  <a href=""
                    ><i class="icon-copy fa fa-calendar"></i
                    ><Router-link to="/admin/trimestre"
                      ><b> Eleves mis à pied</b></Router-link
                    >
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- création d'un badge -->
      <div class="row">
        <div class="col-xl-8 mb-30">
          <div class="card-box height-100-p pd-20">
            <div class="row no-gutters">
              <div class="col-lg-3 col-md-12 col-sm-12">
                <div class="blog-img">
                  <img
                    src="/assets/vendors/images/ianatra.png"
                    alt=""
                    width="200"
                    height="200"
                  />
                </div>
              </div>
              <div class="col-lg-6 text-center">
                <h3><B>CARTE D'IDENTITE SCOLAIRE</B></h3>
                <h5>Année scolaire : 2023-2024</h5>
                <h5>Classe : 5ème</h5>
              </div>
              <div class="col-lg-3 col-md-12 col-sm-12">
                <div class="contact-avatar">
                  <span class="chat-profile-photo">
                    <img
                      src="/assets/vendors/images/photo2.jpg"
                      alt=""
                      width="200"
                      height="200"
                    />
                  </span>
                </div>
              </div>
            </div>
            <hr />
            <div class="row no-gutters" style="padding-top: 40px">
              <div class="col-lg-1 col-md-12 col-sm-12">
                <p></p>
              </div>
              <div class="col-lg-7">
                <h5>INFORMATION DE L'ELEVE</h5>
                <br />
                <h5>NOM : 2023-2024</h5>
                <h5>PRENOM(S) : 5ème</h5>
                <h5>DATE ET LIEU DE NAISSANCE : 5ème</h5>
                <h5>MATRICULE : 5ème</h5>
                <h5>FILS DE : 5ème</h5>
              </div>
              <div
                style="padding-right: 30px"
                class="col-lg-4 col-md-12 col-sm-12"
              >
                <div v-html="qrCode"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 mb-30">
          <div class="card-box height-100-p pd-20">
            <div class="card-box mb-30">
              <h5 class="pd-20 h5 mb-0">Actions</h5>
              <div class="list-group">
                <a
                  href="#"
                  class="list-group-item d-flex align-items-center justify-content-between active bg-info"
                  >Enregistrer dans la base de données
                </a>
                <a
                  href="#"
                  class="list-group-item d-flex align-items-center justify-content-between active"
                  >Imprimer</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  fin table eleves -->
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      qrCode: "",
      id: this.$route.params.id,
    };
  },
  mounted() {
    this.fetchQrCode();
  },
  methods: {
    fetchQrCode() {
      axios
        .get("http://127.0.0.1:8000/api/badges/index/" + this.id)
        .then((res) => {
          this.qrCode = res.data.qrCode;
        })
        .catch((error) => {
          console.error("error: ", error);
        });
    },
  },
};
</script>
<style></style>