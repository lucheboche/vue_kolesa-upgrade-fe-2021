<template>
  <div class="section__content content">
    <Modal
    v-if="isModalOpened"
    :cardElem="cardEl"
    :userScore="user.score"
    @close="modalClose"
    />

    <div class="content__banner"></div>

    <Bonus/>

    <Options
    @opt="optionsType = $event"
    />

    <CardItems
    :cardsMassiveComputed="cardsMassiveComputed"
    :search="search"
    @modalOpen="modalOpen"
    class="content__cards"
    />
  </div>
</template>

<script>
import Modal from './components/modal.vue';
import CardItems from './components/cardItems.vue';
import Options from './components/options.vue';
import Bonus from './components/bonus.vue';

export default {
  name: 'App',
  components: {
    Modal,
    CardItems,
    Options,
    Bonus,
  },
  data() {
    return {
      isModalOpened: false,
      cardEl: {},
      optionsType: 0,
      search: '',
    };
  },
  computed: {
    cardsMassiveCloth() {
      return this.$store.state.cardsMassiveCloth;
    },
    cardsMassiveAccessory() {
      return this.$store.state.cardsMassiveAccessory;
    },
    cardsMassiveComputedWithoutSearch() {
      if (this.optionsType === 1) {
        return this.sortArray(this.cardsMassiveCloth);
      }
      if (this.optionsType === 2) {
        return this.sortArray(this.cardsMassiveAccessory);
      }
      return this.sortArray(this.cardsMassiveCloth.concat(this.cardsMassiveAccessory));
    },
    cardsMassiveComputed() {
      if (this.search.length > 0) {
        return this.cardsMassiveComputedWithoutSearch
          .filter((el) => el.title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1);
      }
      return this.cardsMassiveComputedWithoutSearch;
    },
  },
  mounted() {
    this.$store.dispatch('fetchCardsData');
  },
  methods: {
    modalClose(el) {
      if (!el || el > 0) {
        this.isModalOpened = false;
        document.body.style.overflowY = 'visible';
      }
      if (el) {
        this.user.score -= el;
      }
    },
    modalOpen(el) {
      this.cardEl = el;
      this.isModalOpened = true;
      document.body.style.overflow = 'hidden';
    },
    sortArray(arr) {
      arr.sort((b, a) => {
        if (a.isNew > b.isNew) {
          return 1;
        }

        if (a.isNew < b.isNew) {
          return -1;
        }

        return 0;
      });
      return arr;
    },
  },
  watch: {
    optionsType() {
      this.search = '';
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/vars.scss';
@import '@/scss/mixin.scss';

.content {
    &__banner {
        content: '';
        width: 1040px;
        height: 336px;
        background-color: $payed-blue;
        border-radius: 8px;
        margin-bottom: 24px;
    }

    &__bonus {
        margin-bottom: 40px;
    }

    &__options {
        margin-bottom: 16px;
    }

    &__cards {
        margin-bottom: 192px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 330px);
        gap: 24px;
    }
}
</style>
