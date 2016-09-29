<template>

  <div class="actions-button">
    <create-button></create-button>
  </div>

  <div class="actions-user">
    <user-box user-name='Vini Palma' user-initials='VP'></user-box>
  </div>

  <div class="actions-notifications">
    <notification-trigger></notificatio-trigger>
  </div>

</template>

<script>

  import CreateButton from './CreateButton';
  import UserBox from './UserBox';
  import NotificationTrigger from './NotificationTrigger';

  export default {
    name: 'Actions',
    components: {
      NotificationTrigger,
      UserBox,
      CreateButton,
    },
  };

</script>

<style>

  .actions-button,
  .actions-user,
  .actions-notifications {
    display: inline-block;
    vertical-align: middle;
    height: 60px;
    line-height: 60px;
    width: 40%;
    text-align: center;
    cursor: pointer;
  }

  .actions-button:hover,
  .actions-user:hover,
  .actions-notifications:hover {
    box-shadow: 0 6px 4px -3px #E5E6EA;
  }

  .actions-notifications {
    width: 18%;
    cursor: pointer;
  }

  .actions-button,
  .actions-user {
    border-right: solid 2px #F6F7F8;
  }

</style>
