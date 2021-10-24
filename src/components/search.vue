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
  props: {
    searchReset: Boolean,
  },
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
    search(n, o) {
      if (Math.abs(n.length - o.length) === 1) {
        this.$emit('search', this.search);
      }
    },
    searchReset() {
      if (this.searchReset) {
        this.search = '';
      }
    },
  },
};
</script>

<style lang="scss">
  @import '../scss/blocks/search.scss';
</style>
