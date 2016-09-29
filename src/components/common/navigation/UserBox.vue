<template >

  <div class="user">
    <span class="user-initials">{{ userInitials }}</span>
    <p class="user-name">{{ userName }}</p>
  </div>

</template>

<script>

  export default {
    name: 'UserBox',
    props: ['userName', 'userInitials'],
  };

</script>

<style scoped>

  .user-initials,
  .user-name {
    display: inline-block;
    vertical-align: middle;
    margin: 0;
  }

  .user-initials {
    height: 30px;
    width: 30px;
    line-height: 30px;
    background: #5DC560;
    color: #FFF;
    border-radius: .2em;
    margin-right: 10px;
  }

  .user-name {
    font-weight: 500;
  }

</style>
