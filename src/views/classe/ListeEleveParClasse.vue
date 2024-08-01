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
                  Eleves En Attente
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

      <!-- Simple Datatable start -->
      <div class="pd-20 card-box mb-30">
        <div class="clearfix mb-20">
          <div class="pull-left">
            <h4 class="text-info h4">Liste des eleves dans la classe de :</h4>
          </div>
        </div>
        <!-- bouton dowload -->
        <div class="page-header">
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <button type="button" class="btn btn-outline-info">
                <i class="icon-copy fa fa-table" aria-hidden="true"
                  ><b> CSV</b></i
                >
              </button>
              <button type="button" class="btn btn-outline-info">
                <i class="icon-copy fa fa-file-excel-o" aria-hidden="true"
                  ><b> EXEL </b></i
                >
              </button>
              <button type="button" class="btn btn-outline-info">
                <i class="icon-copy fa fa-file-word-o" aria-hidden="true"
                  ><b> WORD </b></i
                >
              </button>
              <button type="button" class="btn btn-outline-info">
                <i class="icon-copy fa fa-print" aria-hidden="true"
                  ><b> PRINT</b></i
                >
              </button>
              <button type="button" class="btn btn-outline-info">
                <i class="icon-copy fa fa-download" aria-hidden="true"
                  ><b> PDF</b></i
                >
              </button>
            </div>
            <div class="col-md-6 col-sm-12 text-right">
              <form>
                <div class="row mb-0">
                  <div class="col-md-9">
                    <input
                      type="text"
                      class="form-control search-input"
                      placeholder="Search Here"
                    />
                  </div>
                  <div class="col-md-3">
                    <button type="button" class="btn btn-outline-info">
                      Rechercher
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- table -->
        <div class="page-header bg-white">
          <table class="table table-warning">
            <thead>
              <tr>
                <th>photo de profile</th>
                <th>Nom</th>
                <th>Prénoms</th>
                <th>date de naissance</th>
                <th>Contact</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(eleve, index) in this.eleves" :key="index">
                <!-- <th scope="row">{{ user.profile_photo_path }}</th> -->
                <!-- <td>{{ eleve.photo_profil }}</td> -->
                <td>
                  <div class="chat-profile-photo">
                    <img
                      src="/assets/vendors/images/photo7.jpg"
                      height="70"
                      width="70"
                      alt=""
                    />
                  </div>
                </td>
                <td>{{ eleve.adresse }}</td>
                <td>{{ eleve.adresse }}</td>
                <td>{{ eleve.adresse }}</td>
                <td>
                  <span class="badge badge-info">{{ eleve.adresse }}</span>
                </td>
                <td>
                  <div class="dropdown">
                    <a
                      class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                    >
                      <i class="dw dw-more"></i>
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list"
                    >
                      <a
                        v-on:click="afficheDetail(eleve.id)"
                        class="dropdown-item"
                        href="#"
                        ><i class="dw dw-eye"></i>Détails</a
                      >
                      <a class="dropdown-item" href="#"
                        ><i class="dw dw-edit2"></i> Modifier</a
                      >
                      <a class="dropdown-item" href="#"
                        ><i class="dw dw-delete-3"></i> Supprimer</a
                      >
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            class="btn-toolbar mb-15"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div class="btn-group mr-2" role="group" aria-label="First group">
              <button type="button" class="btn btn-outline-info">1</button>
              <button type="button" class="btn btn-outline-info">2</button>
              <button type="button" class="btn btn-outline-info">3</button>
              <button type="button" class="btn btn-outline-info">4</button>
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
  name: "elevesEnAttente",
  data() {
    return {
      eleves: [],
      id: this.$route.params.idClasse,
    };
  },
  mounted() {
    this.getEleves();
  },
  methods: {
    getEleves() {
      axios
        .get("http://127.0.0.1:8000/api/classes/" + this.id + "/eleves")
        .then((res) => {
          this.eleves = res.data;
          console.log(this.eleves);
        });
    },
    getImageUrl(photoName) {
      return "http://127.0.0.1:8000/storage/" + photoName;
    },
    afficheDetail(idEleve) {
      this.$router.push("/admin/eleve/" + idEleve + "/eleve-details");
    },
    afficheDetail(idEleve) {
      this.$router.push("/admin/eleve/" + idEleve + "/eleve-details");
    },
  },
};
</script>
<style></style>