<template>
  <div class="">
    <p>cocktail Edit!</p>
    <p>id cocktail : {{ idCocktail }}</p>
  </div>
</template>
<script>
export default {
  name: "cocktailEdit",
  props: ["idc"],
  data() {
    return {
      idCocktail: "",
    };
  },
};
</script>
<style scoped>
</style>