<template>
  <div class="cards content__cards">
    <div v-for="el in cardsMassiveComputed"
      :key="el.id"
      class="card-item"
      @click="$emit('modalOpen', el)"
      >
      <div class="card-item__image">
        <img
          :src="el.mainImage"
          :alt="el.title"
          width="330"
          height="330"
        />
        <div
          v-if="el.isNew"
          class="card-item__stick"
        >
          new
        </div>
      </div>
      <div class="card-item__price">
        {{ el.price }} {{checkBall(el.price)}}
      </div>
      <div class="card-item__title">
        Футболка {{ el.title }}
      </div>

      <div
      v-if="el.sizes && el.sizes.length > 0"
      class="card-item__sizes"
      >
        Размеры:
        <span style="text-transform: uppercase;">
        {{ `${el.sizes.join('/')}` }}
        </span>
      </div>
      <div v-else class="card-item__sizes">
        &nbsp;
        </div>
      <button class="btn card-item__btn">Заказать</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cardItem',
  props: {
    cardsMassiveComputed: {
      type: Array,
      required: true,
    },
  },
  methods: {
    checkBall(el) {
      const num = String(el).split('').reverse();

      if (+num[0] > 4 || +num[0] === 0 || +num[1] === 1) {
        return 'баллов';
      }

      if (+num[0] === 1) {
        return 'балл';
      }

      return 'балла';
    },
  },
};
</script>

<style lang="scss">
  @import '../scss/blocks/card-item.scss';
</style>
