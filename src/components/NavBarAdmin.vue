<template>
  <div>
    <nav>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/admin/dashboard">Dashboard</RouterLink></li>
        <li><RouterLink to="/admin/user/index">utilisateur</RouterLink></li>
        <li>
          <RouterLink to="/admin/cocktail/index">Cocktail</RouterLink>
        </li>
        <li>
          <RouterLink to="/admin/cocktail/edit/12">Cocktail Edit</RouterLink>
        </li>
        <li>
          <RouterLink to="/admin/user/edit/12">user t12</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "navAdmin",
};
</script>
<style>
</style>