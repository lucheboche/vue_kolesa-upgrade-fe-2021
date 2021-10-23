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
      <Search @search="search=$event"/>
      <User :user="user"/>
    </header>

    <section class="section">
      <Menu/>
      <div class="section__content content">
        <div class="content__banner"></div>

        <Bonus/>
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
// import cardsMassive from './js/cardsMassive';
import Footer from './components/footer.vue';
import Menu from './components/menu.vue';
import Search from './components/search.vue';
import User from './components/user.vue';
import Options from './components/options.vue';
import Bonus from './components/bonus.vue';
import axios from './js/axios';

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
    Bonus,
  },
  data() {
    return {
      isModalOpened: false,
      cardsMassiveCloth: [],
      cardsMassiveAccessory: [],
      cardEl: {},
      optionsType: 0,
      search: '',
      user: {},
    };
  },
  computed: {
    cardsMassiveComputed() {
      if (this.optionsType === 1) {
        return this.sortArray(this.cardsMassiveCloth);
      }
      if (this.optionsType === 2) {
        return this.sortArray(this.cardsMassiveAccessory);
      }
      const arr = this.cardsMassiveCloth.concat(this.cardsMassiveAccessory);
      return this.sortArray(arr);
    },
  },
  mounted() {
    axios.get('-_RLsEGjof6i/data')
      .then((res) => {
        this.cardsMassiveCloth = res.data;
      })
      .catch(console.log);

    axios.get('q3OPxRyEcPvP/data')
      .then((res) => {
        this.cardsMassiveAccessory = res.data;
      })
      .catch(console.log);

    axios.get('7ZW3y5GAuIge/data')
      .then((res) => {
        this.user = res.data;
      })
      .catch(console.log);
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
};
</script>

<style lang="scss">
@import "./src/scss/main.scss";
</style>
