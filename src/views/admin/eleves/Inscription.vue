<template>
  <div class="pd-ltr-20 xs-pd-20-10">
    <div class="min-height-200px">
      <div class="page-header">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="title">
              <h4>Form Wizards</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html">Accueil</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Inscription
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

      <div class="pd-20 card-box mb-30">
        <div class="clearfix">
          <h4 class="text-blue h4">Formulaire d'inscription</h4>
          <p class="mb-30">Vueillez saisir les informations nécessaires</p>
        </div>
        <div class="wizard-content">
          <form
            enctype="multipart/form-data"
            class="tab-wizard wizard-circle wizard"
            @submit.prevent="saveEleve"
          >
            <h5>Information personnel</h5>
            <section>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Nom :</label>
                    <input
                      type="text"
                      v-model="model.eleve.nom"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Prénom(s) :</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="model.eleve.prenom"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Adresse email:</label>
                    <input
                      type="email"
                      class="form-control"
                      v-model="model.eleve.email"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Date de naissance :</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="model.eleve.date_naissance"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <!-- <div class="form-group">
                    <label> :</label>
                    <select class="custom-select form-control">
                      <option value="">Classe actuel</option>
                      <option value="Amsterdam">India</option>
                      <option value="Berlin">UK</option>
                      <option value="Frankfurt">US</option>
                    </select>
                  </div> -->
                  <div class="form-group">
                    <label>Classe Actuel:</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="model.eleve.matricule"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>photo de profile</label>
                    <input
                      type="file"
                      class="form-control-file form-control height-auto"
                      @change="fileUploid"
                    />
                  </div>
                </div>
              </div>
            </section>
            <!-- Step 2 -->
            <br />
            <h5>Information du père</h5>
            <br />
            <section>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Nom du père :</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="model.eleve.pere_nom"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Prénom (s) du père :</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="model.eleve.pere_prenom"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Contact du père :</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="model.eleve.pere_contact"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Profession Père :</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="model.eleve.profession_pere"
                    />
                  </div>
                </div>
              </div>
            </section>
            <!-- Step 3 -->
            <br />
            <h5>Information de la mère</h5>
            <section>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Nom de la Mère :</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="model.eleve.mere_nom"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Prenom(s) Mère :</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="model.eleve.mere_prenom"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Profession Mère :</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="model.eleve.profession_mere"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label>Contact Mère :</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="model.eleve.mere_contact"
                    />
                  </div>
                </div>
              </div>
            </section>
            <!-- Step 4 -->
            <br />
            <h5>Information du tuteur</h5>
            <section>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Nom Tuteur :</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="model.eleve.tuteur_nom"
                    />
                  </div>
                  <div class="form-group">
                    <label>Tuteur prénom(s)</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="model.eleve.tuteur_prenom"
                    />
                  </div>
                  <div class="form-group">
                    <label>Contact tuteur</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="model.eleve.tuteur_contact"
                    />
                  </div>
                  <div class="form-group">
                    <label>Email parent</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="model.eleve.emailParent"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Comments</label>
                    <textarea class="form-control"></textarea>
                  </div>
                </div>
              </div>
            </section>
            <div>
              <button type="submit" class="btn btn-primary">Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "inscription",
  data() {
    return {
      model: {
        eleve: {
          nom: "",
          prenom: "",
          email: "",
          date_naissance: "",
          photo_profil: null,
          pere_nom: "",
          pere_prenom: "",
          profession_pere: "",
          pere_contact: "",
          mere_nom: "",
          mere_prenom: "",
          profession_mere: "",
          mere_contact: "",
          emailParent: "",
          tuteur_nom: "",
          tuteur_prenom: "",
          tuteur_contact: "",
        },
      },
    };
  },
  methods: {
    saveEleve() {
      // Envoyer une requête POST à l'API Symfony avec les données du formulaire
      axios
        .post("http://127.0.0.1:8000/api/inscription", this.model.eleve, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          alert(response.data.message);
          console.log("Insertion réussie !", response.data);
          // this.$router.push("/affiche");
        })
        .catch((error) => {
          console.log(this.model.eleve);
          console.error("Erreur lors de l'insertion :", error);
        });
    },
    fileUploid(event) {
      this.model.eleve.photo_profil = event.target.files[0];
    },
  },
};
</script>
<style></style>