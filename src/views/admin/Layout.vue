<template>
  <top-nav />
  <nav-right />
  <nav-left />
  <div class="mobile-menu-overlay"></div>

  <div class="main-container">
    <router-view />
    <div class="footer-wrap pd-20 mb-20 card-box">
      DeskApp - Bootstrap 4 Admin Template By
      <a href="https://github.com/dropways" target="_blank"
        >Ankit Hingarajiya</a
      >
    </div>
  </div>
</template>
<script>
import topNav from "@/components/NavTop.vue";
import navLeft from "@/components/NavLeft.vue";
import NavRight from "@/components/NavRight.vue";
export default {
  name: "adminLayout",
  components: {
    topNav,
    navLeft,
    NavRight,
  },
};
</script>
<style>
/* @import url("/assets/vendors/mdi/css/materialdesignicons.min.css");
@import url("/assets/vendors/flag-icon-css/css/flag-icon.min.css");
@import url("/assets/vendors/css/vendor.bundle.base.css");
@import url("/assets/vendors/font-awesome/css/font-awesome.min.css");
@import url("/assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css");
@import url("/assets/vendors/css/style.css"); */
</style>
  
