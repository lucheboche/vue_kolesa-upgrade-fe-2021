<template>
  <div id="app">
    <Modal
    v-if="isModalOpened"
    :cardElem="cardEl"
    @emit-close="modalClose"
    />

    <header class="header">
      <div class="header__big-logo">
        <a href="#" class="header__big-logo-link">
          <img src="../src/img/logo.svg" alt="logo" width="215" height="35" />
        </a>
      </div>
      <div class="header__search">
        <button class="header__search-btn">
          <img src="../src/img/search-big.svg" alt="search" />
        </button>
        <input class="header__search-input" type="text" placeholder="Поиск" />
      </div>
      <div class="header__user">
        <button class="header__user-btn">
          <img
            class="header__user-image"
            src="../src/img/userpic.png"
            alt="userpic"
            width="44"
            height="44"
          />
          <div class="header__user-info">
            <div class="header__user-name">Мортиджан</div>
            <div class="header__user-balance">300 баллов</div>
          </div>
        </button>
      </div>
    </header>

    <section class="section">
      <nav class="menu section__menu">
        <ul class="menu__link-box">
          <li class="menu__link-item">
            <a class="menu__link" href="#">Оргсхема</a>
          </li>
          <li class="menu__link-item">
            <a class="menu__link" href="#">Kolesa Team</a>
          </li>
          <li class="menu__link-item menu__link-item--bolds">
            <a class="menu__link" href="#">Kolesa Shop</a>
          </li>
          <li class="menu__link-item">
            <a class="menu__link" href="#">Картина компании</a>
          </li>
          <li class="menu__link-item">
            <a class="menu__link" href="#">Новости</a>
          </li>
          <li class="menu__link-item">
            <a class="menu__link" href="#">Education</a>
          </li>
          <li class="menu__link-item">
            <a class="menu__link" href="#">Guidelines</a>
          </li>
          <li class="menu__link-item">
            <a class="menu__link" href="#">Библиотека</a>
          </li>
          <li class="menu__link-item">
            <a class="menu__link" href="#">FAQ</a>
          </li>
        </ul>
      </nav>

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

        <div class="content__options options">
          <label class="options__box">
            <input @change="optionsType=0"
            class="input-radio js-tab" type="radio" name="tab" checked />
            <div class="options__tab options__tab--main">Все товары</div>
          </label>
          <label class="options__box">
            <input @change="optionsType=1" class="input-radio js-tab" type="radio" name="tab" />
            <div class="options__tab options__tab--main">Одежда</div>
          </label>
          <label class="options__box">
            <input @change="optionsType=2" class="input-radio js-tab" type="radio" name="tab" />
            <div class="options__tab options__tab--main">Аксессуары</div>
          </label>
        </div>

        <CardItem
        :cardsMassiveComputed="cardsMassiveComputed"
        @modalOpen="modalOpen"
        />
      </div>
    </section>

    <footer class="footer">
      <div class="footer__social">
        <div class="footer__social-kolesa">
          <a class="footer__social-link" href="#">© Kolesa Group</a>
        </div>
        <div class="footer__social-other">
          <a class="footer__social-link" href="#">
            <img
              src="../src/img/Instagram.svg"
              alt="Instagram"
              width="24"
              height="24"
            />
          </a>
          <a class="footer__social-link" href="#">
            <img
              src="../src/img/YouTube.svg"
              alt="YouTube"
              width="24"
              height="24"
            />
          </a>
          <a class="footer__social-link" href="#">
            <img src="../src/img/VK.svg" alt="VK" width="24" height="24" />
          </a>
        </div>
      </div>

      <div class="footer__text">
        Есть идеи что улучшить?<br />Не знаешь, с кем решить проблему?
      </div>

      <button class="footer__btn">Написать</button>
    </footer>
  </div>
</template>

<script>
import Modal from './components/modal.vue';
import CardItem from './components/cardItem.vue';
import cardsMassive from './js/cardsMassive';

export default {
  name: 'App',
  components: {
    Modal,
    CardItem,
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
