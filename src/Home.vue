<template>
  <navigation></navigation>
  <a v-link="{path: '/hello'}">Hello</a>
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
