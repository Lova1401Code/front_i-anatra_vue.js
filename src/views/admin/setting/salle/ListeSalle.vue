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
          <h4 class="text-info h4">Salle</h4>
          <p class="mb-30">All bootstrap element classies</p>
        </div>
      </div>
      <form @submit.prevent="saveSalle">
        <div class="row">
          <div class="col-md-2 col-sm-12">
            <div class="form-group">
              <label>Nom de la salle</label>
              <input
                v-model="modeleSalle.nom"
                type="text"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-md-2 col-sm-12">
            <div class="form-group">
              <label>Nombre des eleves maxiamal</label>
              <input
                v-model="modeleSalle.nombreMax"
                type="number"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-md-2 col-sm-12">
            <div class="form-group">
              <label>Nombre des bancs</label>
              <input
                v-model="modeleSalle.nombreBanc"
                type="number"
                class="form-control"
              />
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
              <button type="button" class="btn btn-danger">Annuler</button>
              <button type="submit" class="btn btn-info">Enregistrer</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- Striped table start -->
    <div class="pd-20 card-box mb-30">
      <div class="clearfix mb-20">
        <div class="pull-left">
          <h4 class="text-info h4">Liste des salles</h4>
          <p>
            Add <code>.table .table-striped</code> to add zebra-striping to any
            table row within the <code>&lt;tbody&gt;</code>.
          </p>
        </div>
      </div>
      <table class="table table-info">
        <thead>
          <tr>
            <th scope="col">Nom Salle</th>
            <th scope="col">Nombre Max</th>
            <th scope="col">Nombre bancs</th>
            <th scope="col">etat</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(salle, index) in this.salles" :key="index">
            <!-- <th scope="row">{{ user.profile_photo_path }}</th> -->
            <td>{{ salle.nom }}</td>
            <td>{{ salle.nombreMax }}</td>
            <td>{{ salle.nombreBanc }}</td>
            <td>
              <div style="margin-right: 100px" class="progress mb-20">
                <div
                  class="progress-bar bg-success progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style="width: 50%"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
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
                    v-on:click="afficheDetail(user.id)"
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
    </div>
  </div>
</template>
<script>
import axios, { Axios } from "axios";
export default {
  name: "salle",
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
    saveSalle() {
      axios
        .post("http://127.0.0.1:8000/api/salle", this.modeleSalle)
        .then((response) => {
          alert("Insertion réussie !", response.data);
          // this.$router.push("/affiche");
        })
        .catch((error) => {
          alert(this.modeleSalle);
          console.error("Erreur lors de l'insertion :", error);
        });
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