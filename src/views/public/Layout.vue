<template>
  <div class="public">
    <navpub />
    <p>Public layout</p>
    <router-view />
  </div>
</template>
<script>
import PublicNav from "@/components/PublicNav.vue";
export default {
  name: "Layout",
  components: {
    navpub: PublicNav,
  },
};
</script>
<style scoped>
.public {
  border: solid 1px red;
}
</style>