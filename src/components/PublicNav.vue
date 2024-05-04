<template>
  <div>
    <HelloWorld msg="You did it!" />

    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/coctail">Coctail</RouterLink> |
      <RouterLink to="/contact">Contact</RouterLink>|
      <RouterLink to="/admin/dashboard">Admin</RouterLink>
    </nav>
  </div>
</template>
<script>
export default {
  name: "navPublic",
};
</script>