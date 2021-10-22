<template>
  <div id="app">
    <Modal
    v-if="isModalOpened"
    :cardElem="cardEl"
    @close="modalClose"
    />

    <header class="header">
      <div class="header__big-logo">
        <a href="#" class="header__big-logo-link">
          <img src="../src/img/logo.svg" alt="logo" width="215" height="35" />
        </a>
      </div>
      <Search/>
      <User/>
    </header>

    <section class="section">
      <Menu/>
      <div class="section__content content">
        <div class="content__banner"></div>

        <div class="content__bonus bonus">
          <button class="bonus__btn bonus__btn--green btn">
            <img
              class="bonus__image"
              src="../src/img/plus-sign.svg"
              alt="plus-sign"
            />
            Получить баллы
          </button>
          <button class="bonus__btn bonus__btn--yellow btn">
            <img
              class="bonus__image"
              src="../src/img/question-sign.svg"
              alt="question-sign"
            />
            Как получить баллы
          </button>
          <button class="bonus__btn bonus__btn--blue btn">
            <img
              class="bonus__image"
              src="../src/img/gift.png"
              alt="gift"
            />
            Подарить баллы
          </button>
        </div>
        <Options
        @opt="optionsType = $event"
        />
        <CardItem
        :cardsMassiveComputed="cardsMassiveComputed"
        @modalOpen="modalOpen"
        />
      </div>
    </section>

    <Footer/>
  </div>
</template>

<script>
import Modal from './components/modal.vue';
import CardItem from './components/cardItem.vue';
import cardsMassive from './js/cardsMassive';
import Footer from './components/footer.vue';
import Menu from './components/menu.vue';
import Search from './components/search.vue';
import User from './components/user.vue';
import Options from './components/options.vue';

export default {
  name: 'App',
  components: {
    Modal,
    CardItem,
    Footer,
    Menu,
    Search,
    User,
    Options,
  },
  data() {
    return {
      isModalOpened: false,
      cardsMassive,
      cardEl: {},
      optionsType: 0,
    };
  },
  computed: {
    cardsMassiveComputed() {
      if (this.optionsType > 0) {
        const arr = this.cardsMassive.filter((card) => card.typeItem === this.optionsType);
        return this.sortArray(arr);
      }
      return this.sortArray(this.cardsMassive);
    },
  },
  methods: {
    modalClose() {
      this.isModalOpened = false;
      document.body.style.overflowY = 'visible';
    },
    modalOpen(el) {
      this.cardEl = el;
      this.isModalOpened = true;
      document.body.style.overflow = 'hidden';
    },
    sortArray(arr) {
      arr.sort((b, a) => {
        if (a.newItem > b.newItem) {
          return 1;
        }

        if (a.newItem < b.newItem) {
          return -1;
        }

        return 0;
      });
      return arr;
    },
  },
};
</script>

<style lang="scss">
@import "./src/scss/main.scss";
</style>
