<template>
  <div class="search">
    <button class="search__search-btn">
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
      this.search = '';
    },
  },
  watch: {
    search() {
      if (this.search.length > 0) {
        this.$emit('search', this.search);
      }
    },
  },
};
</script>

<style lang="scss">
  @import '../scss/blocks/search.scss';
</style>
