<template>
  <div class="search">
    <button class="search__search-btn">
      <img src="../img/search-big.svg" alt="search" />
    </button>
    <input class="search__search-input" type="text" placeholder="Поиск" />
  </div>
</template>

<script>
export default {
  name: 'Search',
};
</script>

<style lang="scss">
  @import '../scss/blocks/search.scss';
</style>
