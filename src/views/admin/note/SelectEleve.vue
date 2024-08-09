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
                <div class="col-md-3">
                  <span class="mtext"> Configuration </span>
                </div>
                <div class="col-md-2">
                  <a href=""
                    ><i class="icon-copy fa fa-calendar"></i
                    ><Router-link to="/admin/anneeScolaire"
                      >Années Scolaire</Router-link
                    >
                  </a>
                </div>
                <div class="col-md-2">
                  <a href=""
                    ><i class="icon-copy fa fa-calendar"></i
                    ><Router-link to="/admin/matiere">Matières</Router-link>
                  </a>
                </div>
                <div class="col-md-2">
                  <a href=""
                    ><i class="icon-copy fa fa-calendar"></i
                    ><Router-link to="/admin/salle">salle</Router-link>
                  </a>
                </div>
                <div class="col-md-2">
                  <a href=""
                    ><i class="icon-copy fa fa-calendar"></i
                    ><Router-link to="/admin/trimestre">trimestre</Router-link>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Form grid Start -->
    <div class="pd-20 card-box mb-30">
      <div class="clearfix">
        <div class="pull-left">
          <h4 class="text-info h4">Veuillez séléctionner une classe</h4>
          <p class="mb-30">All bootstrap element classies</p>
        </div>
      </div>
      <form @submit.prevent="afficheListeEleve">
        <div class="row">
          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label>Année Académique</label>
              <div class="">
                <select class="custom-select col-12">
                  <option selected="">Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label>Choisisser une classe</label>
              <div class="">
                <select class="custom-select col-12">
                  <option selected="">Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="" style="margin-top: 32px">
              <button type="submit" class="btn btn-info">Afficher</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios, { Axios } from "axios";
export default {
  name: "selectEleve",
  data() {
    return {
      salles: [],
      modeleSalle: {
        nom: "",
        nombreMax: "",
        nombreBanc: "",
      },
    };
  },
  methods: {
    afficheListeEleve() {
      this.$router.push("/admin/note/listeEleveSelectionner");
      // axios
      //   .post("http://127.0.0.1:8000/api/salle", this.modeleSalle)
      //   .then((response) => {
      //     alert("Insertion réussie !", response.data);
      //     // this.$router.push("/affiche");
      //   })
      //   .catch((error) => {
      //     alert(this.modeleSalle);
      //     console.error("Erreur lors de l'insertion :", error);
      //   });
    },
    getSalle() {
      axios.get("http://127.0.0.1:8000/api/salle").then((response) => {
        this.salles = response.data;
        // alert("Récupération réussi !", response.data);
        // this.$router.push("/affiche");
      });
    },
  },
  mounted() {
    this.getSalle();
  },
};
</script>
<style>
</style>