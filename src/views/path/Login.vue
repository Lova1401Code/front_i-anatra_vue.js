<template>
  <div>
    <h4>Connexion</h4>
    <form @submit.prevent="login" action="" method="post">
      <div class="form-group">
        <label for="pseudo">Pseudo</label>
        <input type="text" name="" v-model="user.email" />
      </div>
      <div class="form-group">
        <label for="pseudo">Mot de passe </label>
        <input type="password" name="" v-model="user.password" />
      </div>
      <div>
        <button type="submit">Connexion</button>
      </div>
    </form>
  </div>
</template>
<script>
import { accountService } from "@/_services/account_service.js";
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      accountService
        .login(this.user)
        .then((res) => {
          if (res.data.role == "admin") {
            accountService.saveToken(res.data.token);
            this.$router.push("/admin/dashboard");
          }
          if (res.data.role == "enseignant") {
            accountService.saveToken(res.data.token);
            this.$router.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style></style>