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
        active-class="menu__link-item--active"
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
    &__link-item {
        position: relative;
        list-style: none;
        font-size: 16px;
        padding-bottom: 24px;

        &--active {
            font-weight: 600;

            &::before {
                position: absolute;
                left: -12px;
                top: -4px;
                content: '';
                height: 36px;
                width: 4px;
                background-color: $second-color;
                border-radius: 10px;
            }
        }
    }

    &__link {
        color: $main-color;
        text-decoration: none;

        &:hover {
            font-weight: 600;
        }
    }
}

</style>
