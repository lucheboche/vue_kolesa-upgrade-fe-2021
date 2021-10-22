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
        <div class="user__user-name">Мортиджан</div>
        <div class="user__user-balance">300 баллов</div>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'User',
};
</script>

<style lang="scss">
  @import '../scss/blocks/user.scss';
</style>
