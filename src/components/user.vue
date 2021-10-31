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
import axios from '../js/axios';
import checkBall from '../js/checkBall';

export default {
  name: 'User',
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    axios.get('7ZW3y5GAuIge/data')
      .then((res) => {
        this.user = res.data;
      })
      .catch(console.log);
  },
  watch: {
    user() {
      this.$emit('userData', this.user);
    },
    userData() {
      this.user = this.userData;
    },
  },
  methods: {
    checkBall,
  },
};
</script>

<style lang="scss">
  @import '../scss/blocks/user.scss';
</style>
