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
        <div class="user__user-balance">{{user.score}} {{checkBall(user.score)}}</div>
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
  methods: {
    checkBall(el) {
      const num = String(el).split('').reverse();

      if (+num[0] > 4 || +num[0] === 0 || +num[1] === 1) {
        return 'баллов';
      }

      if (+num[0] === 1) {
        return 'балл';
      }

      return 'балла';
    },
  },
};
</script>

<style lang="scss">
  @import '../scss/blocks/user.scss';
</style>
