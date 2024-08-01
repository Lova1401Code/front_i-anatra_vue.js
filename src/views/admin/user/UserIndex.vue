<template>
  <div class="pd-ltr-20 xs-pd-20-10">
    <div class="min-height-200px">
      <div class="page-header">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="title">
              <h4>Basic Tables</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">
                  Basic Tables
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
      <!-- Striped table start -->
      <div class="pd-20 card-box mb-30">
        <div class="clearfix mb-20">
          <div class="pull-left">
            <h4 class="text-blue h4">Striped table</h4>
            <p>
              Add <code>.table .table-striped</code> to add zebra-striping to
              any table row within the <code>&lt;tbody&gt;</code>.
            </p>
          </div>
        </div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Profile</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in this.users" :key="index">
              <div class="chat-profile-photo">
                <img src="/assets/vendors/images/profile-photo.jpg" alt="" />
              </div>
              <!-- <th scope="row">{{ user.profile_photo_path }}</th> -->
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>
                <span class="badge badge-primary">{{
                  user.Type_utilisateur
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
      <!-- Striped table End -->
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "userIndex",
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios.get("http://127.0.0.1:8000/api/user").then((res) => {
        this.users = res.data;
      });
    },
    afficheDetail(idUser) {
      this.$router.push("/admin/eleve/" + idUser + "/eleve-details");
    },
  },
};
</script>
<style scoped>
</style>