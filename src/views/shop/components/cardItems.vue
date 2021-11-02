<template>
  <div
  v-if="cardsMassiveComputed.length > 0"
  >
    <div
    v-for="el in cardsMassiveComputed"
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
        {{ el.sizes.join('/') }}
        </span>
      </div>
      <div v-else class="card-item__sizes">
        &nbsp;
        </div>
      <button class="card-item__btn">Заказать</button>
    </div>
  </div>

  <div
  v-else
  style="display: block"
  >
  По вашему запросу
  <span style="font-size: 16px; font-weight: 600;">
    {{this.$store.state.search ? `"${this.$store.state.search}"` : ' '}}
  </span>
  ничего не найдено
  </div>
</template>

<script>
import checkBall from '@/js/checkBall';

export default {
  name: 'cardItem',
  props: {
    cardsMassiveComputed: {
      type: Array,
      required: true,
    },
  },
  methods: {
    checkBall,
  },
};
</script>

<style lang="scss">
@import '@/scss/vars.scss';
@import '@/scss/mixin.scss';

.card-item {
    width: 330px;
    height: 474px;
    cursor: pointer;

    &__image {
        height: 330px;
        position: relative;
        border-radius: 8px;
        overflow: hidden;
    }

    &__stick {
        position: absolute;
        bottom: 16px;
        left: 16px;
        width: 38px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        background: $green-bg-color;
        color: white;
        border-radius: 4px;
        font-size: 13px;
        line-height: 20px;
    }

    &__price {
        padding-top: 16px;
        padding-left: 16px;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        color: $second-color;
    }

    &__title {
        padding: 8px 24px 0 16px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        text-transform: capitalize;
    }

    &__sizes {
        padding-top: 4px;
        padding-left: 16px;
        color: $title-color-grey;
    }

    &__btn {
        @include btn;

        display: none;
        font-size: 16px;
        line-height: 24px;
        margin: 16px;
        width: 298px;
        height: 44px;
        border-radius: 8px;
        background: $second-color;
        color: white;
    }

    &:hover,
    &__price,
    &__title,
    &__sizes {
        position: relative;
        z-index: 1;
    }

    &:hover::before {
        @include boxsh;

        position: absolute;
        top: 0;
        left: 0;
        content: '';
        width: 330px;
        height: 518px;
        border-radius: 8px;
        background: white;
        z-index: 0;
    }

    &:hover::after {
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        width: 330px;
        height: 518px;
        border-radius: 8px;
        background: $none-color;
        z-index: 5;
    }

    &:hover &__price {
        color: $color-text-red;
    }

    &:hover &__btn {
        display: block;
        position: relative;
        z-index: 2;
    }
}

</style>
