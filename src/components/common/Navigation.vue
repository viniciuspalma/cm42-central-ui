<style scoped>

  .header {
    height: 60px;
    background: #FFF;
    box-shadow: 0 0 10px 2px #E5E6EA;
    line-height: 60px;
    padding: 0 2.5%;
    margin: 0 0 50px 0;
  }

  .menu,
  .logo {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
  }

  .menu {
    width: 10%;
  }

  .menu-hamburguer,
  .menu-team-name {
    margin: 0;
    display: inline-block;
    vertical-align: middle;
  }

  .menu-team-name {
    color: #4D4D4D;
    font-weight: 400;
    text-transform: uppercase;
  }

  .logo {
    width: 60%;
  }

</style>

<template>

  <header class="header">
    <div class="menu">
      <span class="menu-hamburguer">=</span>
      <p class="menu-team-name">Boards</p>
    </div>
    <div class="search">
    </div>
    <div class="logo">

    </div>
  </header>

</template>

<script>

  export default {
    name: 'Navigation',
  };

</script>
