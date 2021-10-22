<template>
  <div class="cards content__cards">
    <div v-for="element in cardsMassiveComputed"
      :key="element.idItem" class="card-item js-card" @click="$emit('modalOpen', element)">
      <div class="card-item__image">
        <img
          src="../img/image 4.png"
          :alt="element.fotoAlt"
          width="330"
          height="330"
        />
        <div v-if="element.newItem" class="card-item__stick">new</div>
      </div>
      <div class="card-item__price">{{ element.priceItem }} баллов</div>
      <div class="card-item__title">
        {{ element.titleItem }}
      </div>

      <div v-if="element.sizes.length > 0" class="card-item__sizes">
        Размеры: <span v-for="(el,i) in element.sizes"
        :key="i" style="text-transform: uppercase;">
        <span v-if="i < 1"></span>
        <span v-else>/</span>
        {{el}}
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
};
</script>

<style lang="scss">
@import '../scss/blocks/card-item.scss';
</style>
