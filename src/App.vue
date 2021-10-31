<template>
  <div id="app">
  <div class="main">
    <header class="header">
      <div class="header__big-logo">
        <a href="#" class="header__big-logo-link">
          <img src="@/img/logo.svg" alt="logo" width="215" height="35" />
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
      <router-view></router-view>
    </section>

    <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from './layout/components/footer.vue';
import Menu from './layout/components/menu.vue';
import Search from './layout/components/search.vue';
import User from './layout/components/user.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Menu,
    Search,
    User,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
@import '@/scss/vars.scss';
@import '@/scss/mixin.scss';

*,
*::before,
*::after {
    margin: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    padding: 0;
}

body {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    color: $main-color;
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
}

img {
    background-color: unset;
    display: block;
}

.input-radio {
    display: none;
}

.main {
    display: grid;
    grid-template-rows: 104px 1fr auto;
    min-height: 100vh;
}

.header {
    width: 100%;
    height: 100%;
    padding: 36px $calc-width 24px $calc-width;
    display: grid;
    grid-template-columns: 312px 308px auto;

    &__big-logo {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 32px;
    }
}

.section {
    padding: 0 $calc-width 0 $calc-width;
    display: grid;
    grid-template-columns: 312px auto;

    &__menu {
        margin-left: 32px;
    }

    &__content {
        @include flexcol;

        margin-right: 88px;
    }
}

</style>
