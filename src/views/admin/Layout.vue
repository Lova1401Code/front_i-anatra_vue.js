<template>
  <div class="">
    <div class="adm">
      <AdminNav />
    </div>
    <div class="ad_content">
      <div class="nav-side">
        <NavAdmin />
      </div>
      <div class="nav-display">
        <router-view />
      </div>
    </div>
    <p>Admin Layout</p>
  </div>
</template>
<script>
import NavAdmin from "@/components/NavBarAdmin.vue";
import AdminNav from "@/components/AdminNav.vue";
export default {
  name: "adminLayout",
  components: {
    AdminNav,
    NavAdmin,
  },
};
</script>
<style scoped>
.ad_content {
  display: flex;
}
.nav-side {
  width: 20%;
  height: 100%;
  border-right: solid 1px black;
}
.nav-display {
  width: 100%;
  padding: 10px;
}
</style>