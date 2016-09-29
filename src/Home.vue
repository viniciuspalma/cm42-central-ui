<template>

  <navigation team-name='Codeminer42'></navigation>

</template>

<script>

  import Navigation from './components/common/Navigation';

  export default {
    components: {
      Navigation,
    },
  };

</script>

<style>

  html {
    padding: 0;
    margin: 0;
    height: 100%;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    height: 100%;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #0B0C1F;
    background: #F6F7F8;
  }

</style>
