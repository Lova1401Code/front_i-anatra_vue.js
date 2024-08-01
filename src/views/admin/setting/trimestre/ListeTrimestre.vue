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
      <form @submit.prevent="saveTrimestre">
        <div class="row">
          <div class="col-md-2 col-sm-12">
            <div class="form-group">
              <label>Nom</label>
              <input
                v-model="modeleTrimestre.nom"
                type="text"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-md-2 col-sm-12">
            <div class="form-group">
              <label>Début</label>
              <input
                v-model="modeleTrimestre.debut"
                type="text"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-md-2 col-sm-12">
            <div class="form-group">
              <label>Fin</label>
              <input
                v-model="modeleTrimestre.fin"
                type="text"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label>Années Scolaire</label>
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
          <h4 class="text-blue h4">Striped table</h4>
          <p>
            Add <code>.table .table-striped</code> to add zebra-striping to any
            table row within the <code>&lt;tbody&gt;</code>.
          </p>
        </div>
      </div>
      <table class="table table-info">
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Début</th>
            <th scope="col">Fin</th>
            <th scope="col">Années scolaires</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(trimestre, index) in this.trimestres" :key="index">
            <!-- <th scope="row">{{ user.profile_photo_path }}</th> -->
            <td>{{ trimestre.nom }}</td>
            <td>{{ trimestre.debut }}</td>
            <td>{{ trimestre.fin }}</td>
            <td>
              <span class="badge badge-primary">{{
                trimestre.annee_scolaire_id
              }}</span>
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
  name: "trimestre",
  data() {
    return {
      trimestres: [],
      modeleTrimestre: {
        nom: "",
        annee_scolaire_id: 1,
        debut: "",
        fin: "",
      },
    };
  },
  methods: {
    saveTrimestre() {
      axios
        .post("http://127.0.0.1:8000/api/semestre", this.modeleTrimestre)
        .then((response) => {
          alert("Insertion réussie !", response.data);
          // this.$router.push("/affiche");
        })
        .catch((error) => {
          alert(error);
          console.error("Erreur lors de l'insertion :", error);
        });
    },
    getTrimestre() {
      axios.get("http://127.0.0.1:8000/api/semestre").then((response) => {
        this.trimestres = response.data;
        // alert("Récupération réussi !", response.data);
        // this.$router.push("/affiche");
      });
    },
  },
  mounted() {
    this.getTrimestre();
  },
};
</script>