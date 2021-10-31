<template>
  <div class="content__bonus bonus">
    <button class="bonus__btn bonus__btn--green">
      <img
        class="bonus__image"
        src="@/img/plus-sign.svg"
        alt="plus-sign"
      />
      Получить баллы
    </button>

    <button class="bonus__btn bonus__btn--yellow">
      <img
        class="bonus__image"
        src="@/img/question-sign.svg"
        alt="question-sign"
      />
      Как получить баллы
    </button>

    <button class="bonus__btn bonus__btn--blue">
      <img
        class="bonus__image"
        src="@/img/gift.png"
        alt="gift"
      />
      Подарить баллы
    </button>
  </div>
</template>

<script>
export default {
  name: 'Bonus',
};
</script>

<style lang="scss">
@import '@/scss/vars.scss';
@import '@/scss/mixin.scss';

.bonus {
    display: flex;
    justify-content: space-between;

    &__image {
        padding-left: 16px;
        padding-right: 24px;
    }

    &__btn {
        @include btn;

        width: 330px;
        height: 76px;
        border-radius: 16px;

        @include font20;

        font-weight: 600;
        justify-content: flex-start;
        transition: 0.1s box-shadow ease-in;

        &:hover {
            @include boxsh;
        }

        &:active {
            @include boxsh($none-color);
        }

        &--green {
            background: $payed-green;
        }

        &--yellow {
            background: $payed-yellow;
        }

        &--blue {
            background: $payed-blue;
        }
    }
}

</style>
