<template>
  <div id="app">

    <Modal
    v-if="isModalOpened"
    :cardElem="cardEl"
    :userScore="user.score"
    @close="modalClose"
    />
  <div class="main">
    <header class="header">
      <div class="header__big-logo">
        <a href="#" class="header__big-logo-link">
          <img src="../src/img/logo.svg" alt="logo" width="215" height="35" />
        </a>
      </div>
      <Search
      @search="search=$event"
      />
      <User
      :userData="user"
      @userData="user=$event"
      />
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
        :search="search"
        @modalOpen="modalOpen"
        class="content__cards"
        />
      </div>
    </section>

    <Footer/>
    </div>
  </div>
</template>

<script>
import Modal from './components/modal.vue';
import CardItem from './components/cardItem.vue';
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
      let arr = [];
      if (this.optionsType === 1) {
        arr = this.sortArray(this.cardsMassiveCloth);
      } else if (this.optionsType === 2) {
        arr = this.sortArray(this.cardsMassiveAccessory);
      } else {
        arr = this.sortArray(this.cardsMassiveCloth.concat(this.cardsMassiveAccessory));
      }

      if (this.search.length > 0) {
        return arr.filter((el) => el.title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1);
      }

      return arr;
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
@import "./src/scss/main.scss";
</style>
