<template>
  <div class="admin">
    <p>admin nav</p>
    <button @click="logout()">déconnexion</button>
  </div>
</template>
<script>
import { accountService } from "@/_services/account_service.js";
export default {
  name: "AdminNav",
  methods: {
    logout() {
      accountService.lougout();
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.admin {
  border-bottom: solid 1px black;
}
</style>