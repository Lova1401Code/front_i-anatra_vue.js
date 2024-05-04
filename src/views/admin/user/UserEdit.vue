<template>
  <div class="">
    <p>User Edit!</p>
    <p>id : {{ id }}</p>
  </div>
</template>
<script>
export default {
  name: "userEdit",
  props: ["id"],
  data() {
    return {
      id: "",
    };
  },
  mounted() {
    this.id = this.$route.params.id;
  },
  updated() {
    this.id = this.$route.params.id;
  },
};
</script>
<style scoped>
</style>