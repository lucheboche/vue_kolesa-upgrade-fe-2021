<template>
  <nav class="menu">
    <ul class="menu__link-box">
      <li
      v-for="(el,i) in linkArray"
      :key="i"
      class="menu__link-item"
      >
        <router-link
        class="menu__link"
        :to="el.link"
        :exact="el.isExact"
        active-class="menu__link--active"
        >
        {{el.name}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      linkArray: [
        { isExact: true, link: '/', name: 'Оргсхема' },
        { isExact: true, link: '/about', name: 'Kolesa Team' },
        { isExact: false, link: '/shop', name: 'Kolesa Shop' },
        { isExact: true, link: '/somelink1', name: 'Картина компании' },
        { isExact: true, link: '/somelink2', name: 'Новости' },
        { isExact: true, link: '/somelink3', name: 'Education' },
        { isExact: true, link: '/somelink4', name: 'Guidelines' },
        { isExact: true, link: '/somelink5', name: 'Библиотека' },
        { isExact: true, link: '/somelink6', name: 'FAQ' },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '@/scss/vars.scss';
@import '@/scss/mixin.scss';

.menu {
  &__link-box {
    @include flexcol;

    gap: 24px;
    margin-bottom: 68px;
  }

  &__link-item {
      list-style: none;
    }

  &__link {
    color: $main-color;
    text-decoration: none;
    font-size: 16px;

    &--active {
      position: relative;
      font-weight: 600;

      &::before {
        position: absolute;
        left: -12px;
        top: -7px;
        content: '';
        height: 36px;
        width: 4px;
        background-color: $second-color;
        border-radius: 10px;
      }
    }

    &:hover {
      font-weight: 600;
    }
  }
}

</style>
