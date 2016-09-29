<template>

  <div class="create-button">
    <button class="button button-uppercase">
      <i class="material-icons">add</i>
      Create
    </button>
  </div>

</template>

<script>

  export default {
    name: 'CreateButton',
  };

</script>

<style scoped>

  .button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
    margin: 0;
    padding: .5em;
    border: none;
    font-size: 14px;
    cursor: pointer;
  }

  .button-uppercase {
    text-transform: uppercase;
    font-weight: 500;
  }

  .button i {
    display: inline-block;
    height: 24px;
    vertical-align: middle;
  }

</style>
