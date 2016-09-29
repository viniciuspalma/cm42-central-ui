<template>

  <div class="search">
    <span class="search-icon">
      <i class="material-icons">search</i>
    </span>
    <input type="text" placeholder="Search..." class="search-input"/>
  </div>

</template>

<script>
export default {
  name: 'Search',
};
</script>

<style scoped>

  .search-icon,
  .search-input {
    margin: 0;
    display: inline-block;
    vertical-align: middle;
  }

  .search-icon {
    height: 24px;
    line-height: 24px;
    color: #3C75DD;
  }

  .search-input {
    border: none;
    font-size: 16px;
    font-weight: 100;
    border-bottom: solid 1px;
    border-bottom-color: transparent;
  }

  .search-input:active,
  .search-input:focus {
    outline: 0;
    font-weight: 100;
    border-bottom-color: #B3A9A9;
  }

</style>
