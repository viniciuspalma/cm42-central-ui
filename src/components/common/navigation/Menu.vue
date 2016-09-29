<template>

  <div class="menu">
    <span class="menu-hamburguer">
      <i class="material-icons">menu</i>
    </span>
    <p class="menu-team-name">{{teamName}}</p>
  </div>

</template>

<script>

  export default {
    name: 'Menu',
    props: ['teamName'],
  };

</script>

<style scoped>

  .menu-hamburguer,
  .menu-team-name {
    margin: 0;
    display: inline-block;
    vertical-align: middle;
  }

  .menu-hamburguer {
    height: 24px;
    margin-right: 10px;
    line-height: 24px;
  }

  .menu-team-name {
    color: #08091D;
    font-weight: 500;
    text-transform: uppercase;
  }
  
</style>
