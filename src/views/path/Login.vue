<template>
  <div>
    <h4>Connexion</h4>
    <form @submit.prevent="login" action="" method="post">
      <div class="form-group">
        <label for="pseudo">Pseudo</label>
        <input type="text" name="" v-model="user.pseudo" id="pseudo" />
      </div>
      <div class="form-group">
        <label for="pseudo">Mot de passe </label>
        <input type="password" name="" v-model="user.pass" id="pseudo" />
      </div>
      <div>
        <button type="submit">Connexion</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      user: {
        pseudo: "",
        pass: "",
      },
    };
  },
  methods: {
    login() {
      console.log(this.user.pseudo);
      console.log(this.user.pass);
    },
  },
};
</script>
<style></style>