<template>
  <div class="search">
    <button
    @click="onEnter"
    class="search__search-btn"
    >
      <img src="../img/search-big.svg" alt="search" />
    </button>
    <input
    v-model="search"
    @keyup.enter="onEnter"
    class="search__search-input"
    type="text"
    placeholder="Поиск"
    />
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      search: '',
    };
  },
  methods: {
    onEnter() {
      this.$emit('search', this.search);
      this.search = '';
    },
  },
};
</script>

<style lang="scss">
  @import '../scss/blocks/search.scss';
</style>
