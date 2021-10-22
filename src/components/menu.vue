<template>
  <nav class="menu section__menu">
    <ul class="menu__link-box">
      <li
      v-for="(el,i) in linkArray"
      :key="i"
      :class="{'menu__link-item--bolds':el.active}"
      class="menu__link-item"
      >
        <a class="menu__link" href="#">{{el.name}}</a>
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
        { active: false, name: 'Оргсхема' },
        { active: false, name: 'Kolesa Team' },
        { active: true, name: 'Kolesa Shop' },
        { active: false, name: 'Картина компании' },
        { active: false, name: 'Новости' },
        { active: false, name: 'Education' },
        { active: false, name: 'Guidelines' },
        { active: false, name: 'Библиотека' },
        { active: false, name: 'FAQ' },
      ],
    };
  },
};
</script>

<style lang="scss">
  @import '../scss/blocks/menu.scss';
</style>
