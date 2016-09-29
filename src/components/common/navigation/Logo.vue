<template>

  <div class="logo">
    <a v-link="{ path: '/' }" class="logo-link">
      <img src="../../../assets/logo.png" class="logo-image"/>
    </a>
  </div>

</template>

<script>

  export default {
    name: 'Logo',
  };

</script>

<style>
  .logo-link {
    display: block;
  }

  .logo-image {
    display: inline-block;
    height: 60px;
  }
</style>
