<template>
  <div class="user">
    <button class="user__user-btn">
      <img
        class="user__user-image"
        src="../img/userpic.png"
        alt="userpic"
        width="44"
        height="44"
      />
      <div class="user__user-info">
        <div class="user__user-name">{{user.name}}</div>
        <div class="user__user-balance">{{user.score}} баллов</div>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  @import '../scss/blocks/user.scss';
</style>
