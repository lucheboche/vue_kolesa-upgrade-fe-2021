<template>
  <div
  v-if="cardsMassiveComputed.length > 0"
  >
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

  <div
  v-else
  style="display: block"
  >
  По вашему запросу
  <span style="font-size: 16px; font-weight: 600;">
    {{search ? `"${search}"` : ' '}}
  </span>
  ничего не найдено
  </div>
</template>

<script>
import checkBall from '../js/checkBall';

export default {
  name: 'cardItem',
  props: {
    cardsMassiveComputed: {
      type: Array,
      required: true,
    },
    search: {
      type: String,
      required: true,
    },
  },
  methods: {
    checkBall,
  },
};
</script>

<style lang="scss">
  @import '../scss/blocks/card-item.scss';
</style>
