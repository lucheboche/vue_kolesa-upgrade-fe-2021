<template>
  <div class="search">
    <button
    @click="onEnter"
    class="search__search-btn"
    >
      <img src="@/img/search-big.svg" alt="search" />
    </button>
    <input
    v-model="search"
    @keyup.enter="onEnter"
    ref="search"
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
      this.$refs.search.blur();
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/vars.scss';
@import '@/scss/mixin.scss';

.search {
  display: flex;
  align-items: center;
  position: relative;

  &__search-btn {
    @include btn;

    position: relative;
    padding: 0 16px;
    z-index: 1;
    border-radius: 8px;

    &:active {
        transform: scale(0.6);
    }
  }

  &__search-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-left: 56px;
    border-radius: 8px;
    background: $search-color;

    &::placeholder {
        color: $title-color-grey;
        font-size: 18px;
        line-height: 28px;
        margin-left: 16px;
    }

    &:focus {
        background: white;
        box-shadow: 0 0 0 1px $border-shadow-color inset;
    }
  }
}
</style>
