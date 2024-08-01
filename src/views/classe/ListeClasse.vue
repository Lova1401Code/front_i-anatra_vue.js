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
                  <span class="mtext"> Classe </span>
                </div>
                <div class="col-md-3">
                  <a href=""
                    ><i class="icon-copy fa fa-calendar"></i
                    ><Router-link to="/admin/anneeScolaire"
                      >Afficher la liste des Eleves</Router-link
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
          <h4 class="text-info h4">Classe</h4>
          <p class="mb-30">All bootstrap element classies</p>
        </div>
      </div>
      <form @submit.prevent="saveAnneeScolaire">
        <div class="row">
          <div class="col-md-3 col-sm-12">
            <div class="form-group">
              <label>Nom de la Classe</label>
              <input
                v-model="this.anneeScolaire.annee"
                type="text"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label>Années Scoalaire</label>
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
              <label>Capacité d'accueil</label>
              <input
                v-model="this.anneeScolaire.debut"
                type="text"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label>Responsable</label>
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
              <label>Frais de scolarité</label>
              <input
                v-model="this.anneeScolaire.fin"
                type="text"
                class="form-control"
              />
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
            <th scope="col">Classe</th>
            <th scope="col">Responsable</th>
            <th scope="col">Capacité d'accueil</th>
            <th scope="col">Frais de Scolarité</th>
            <th scope="col">Etat</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(classe, index) in this.classes" :key="index">
            <!-- <th scope="row">{{ user.profile_photo_path }}</th> -->
            <td>{{ classe.nom }}</td>
            <td>{{ classe.annee_scolaire_id }}</td>
            <td>{{ classe.enseignant_id }}</td>
            <td>{{ classe.enseignant_id }}</td>
            <td>
              <span class="badge badge-info">{{ classe.enseignant_id }}</span>
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
                    v-on:click="afficheListeEleves(classe.id)"
                    class="dropdown-item"
                    href="#"
                    ><i class="dw dw-eye"></i>Liste des eleves</a
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
  name: "listeClasse",
  data() {
    return {
      classes: [],
      anneeScolaire: {
        annee: "",
        debut: "",
        fin: "",
        statut: "desactive",
      },
    };
  },
  methods: {
    afficheListeEleves(idClasse) {
      this.$router.push("/admin/classe/" + idClasse + "/listeEleves");
    },
    saveAnneeScolaire() {
      axios
        .post("http://127.0.0.1:8000/api/classes", this.anneeScolaire)
        .then((response) => {
          alert("Insertion réussie !", response.data);
          // this.$router.push("/affiche");
        })
        .catch((error) => {
          alert(this.anneeScolaire);
          console.error("Erreur lors de l'insertion :", error);
        });
    },
    getClasse() {
      axios.get("http://127.0.0.1:8000/api/classes").then((response) => {
        this.classes = response.data;
        // alert("Récupération réussi !", response.data);
        // this.$router.push("/affiche");
      });
    },
  },
  mounted() {
    this.getClasse();
  },
};
</script>
<style></style>