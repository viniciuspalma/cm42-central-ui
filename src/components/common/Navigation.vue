<template>

  <header class="header">
    <div class="menu-container">
      <menu :team-name="teamName"></menu>
    </div>

    <div class="search-container">
      <search></search>
    </div>

    <div class="logo-container">
      <logo></logo>
    </div>

    <div class="actions-container">
      <actions :user="user"></actions>
    </div>
  </header>

</template>

<script>
  import Menu from './navigation/Menu';
  import Search from './navigation/Search';
  import Logo from './navigation/Logo';
  import Actions from './navigation/Actions';

  export default {
    name: 'Navigation',
    props: ['teamName', 'user'],
    components: {
      Menu,
      Search,
      Logo,
      Actions,
    },
  };

</script>

<style scoped>

  .header {
    height: 60px;
    background: #FFF;
    box-shadow: 0 0 10px 2px #E5E6EA;
    padding: 0 2.5%;
    margin: 0 0 50px 0;
    font-size: 14px;
  }

  .menu-container,
  .search-container,
  .logo-container,
  .actions-container {
    display: inline-block;
    vertical-align: middle;
    height: 60px;
    line-height: 60px;
  }

  .menu-container {
    width: 15%;
    text-align: left;
    cursor: pointer;
    border-right: solid 2px #F6F7F8;
  }

  .search-container {
    width: 20%;
    text-align: center;
  }

  .logo-container {
    width: 30%;
    text-align: center;
  }

  .actions-container {
    width: 34%;
    text-align: right;
  }

</style>
