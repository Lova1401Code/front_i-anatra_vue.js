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
      <!-- Simple Datatable start -->
      <div class="card-box mb-30">
        <div class="pd-20">
          <h4 class="text-blue h4">Data Table Simple</h4>
          <p class="mb-0">
            you can find more options
            <a
              class="text-primary"
              href="https://datatables.net/"
              target="_blank"
              >Click Here</a
            >
          </p>
        </div>
        <div class="pb-20">
          <table class="data-table table stripe hover nowrap">
            <thead>
              <tr>
                <th>Photo</th>
                <th class="table-plus datatable-nosort">Nom de'eleve</th>
                <th>Prenom de l'eleve</th>
                <th>Date de naissance</th>
                <th>Nom Père</th>
                <th>Nom mère</th>
                <th class="datatable-nosort">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(eleve, index) in this.eleves" :key="index">
                <td>
                  <div class="chat-profile-photo">
                    <img :src="getImageUrl(eleve.photo_profil)" alt="" />
                  </div>
                </td>
                <td class="table-plus">{{ eleve.nom }}</td>
                <td>{{ eleve.prenom }}</td>
                <td>{{ eleve.date_naissance }}</td>
                <td>{{ eleve.pere_nom }}</td>
                <td>{{ eleve.mere_nom }}</td>
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
        </div>
      </div>
      <!-- Checkbox select Datatable End -->
      <!-- Export Datatable start -->
      <div class="card-box mb-30">
        <div class="pd-20">
          <h4 class="text-blue h4">Data Table with Export Buttons</h4>
        </div>
        <div class="pb-20">
          <table
            class="table hover multiple-select-row data-table-export nowrap"
          >
            <thead>
              <tr>
                <th>Photo</th>
                <th class="table-plus datatable-nosort">Nom de'eleve</th>
                <th>Prenom de l'eleve</th>
                <th>Date de naissance</th>
                <th>Nom Père</th>
                <th>Nom mère</th>
                <th class="datatable-nosort">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(eleve, index) in this.eleves" :key="index">
                <td>
                  <div class="chat-profile-photo">
                    <img
                      src="/assets/vendors/images/profile-photo.jpg"
                      alt=""
                    />
                  </div>
                </td>
                <td class="table-plus">{{ eleve.nom }}</td>
                <td>{{ eleve.prenom }}</td>
                <td>{{ eleve.date_naissance }}</td>
                <td>{{ eleve.pere_nom }}</td>
                <td>{{ eleve.mere_nom }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Export Datatable End -->
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
    };
  },
  mounted() {
    this.getEleves();
  },
  methods: {
    getEleves() {
      axios.get("http://127.0.0.1:8000/api/eleves-attentes").then((res) => {
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
  },
};
</script>
<style></style>