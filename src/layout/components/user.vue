<template>
  <div class="user">
    <button class="user__user-btn">
      <img
        class="user__user-image"
        :src="userData.avatarUrl"
        alt="userpic"
        width="44"
        height="44"
      />
      <div class="user__user-info">
        <div class="user__user-name">{{userData.name}}</div>
        <div class="user__user-balance">{{userData.score}} {{checkBall(userData.score)}}</div>
      </div>
    </button>
  </div>
</template>

<script>
import checkBall from '@/js/checkBall';

export default {
  name: 'User',
  mounted() {
    this.$store.dispatch('fetchUserData');
  },
  computed: {
    userData() {
      return this.$store.state.userData;
    },
  },
  methods: {
    checkBall,
  },
};
</script>

<style lang="scss">
@import '@/scss/vars.scss';
@import '@/scss/mixin.scss';

.user {
    padding-right: 88px;
    justify-self: flex-end;

  &__user-btn {
    @include btn;

    justify-content: flex-end;
    text-align: left;
  }

  &__user-image {
    border-radius: 50%;
    margin-right: 16px;
  }

  &__user-info {
    @include flexcol;

    justify-content: space-between;
  }

  &__user-name {
    font-weight: 600;
    color: $second-color;
  }

  &__user-balance {
    font-size: 13px;
    line-height: 20px;
  }
}
</style>
