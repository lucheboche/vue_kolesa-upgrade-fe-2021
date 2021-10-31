<template>
  <div class="content__bonus bonus">
    <button class="bonus__btn bonus__btn--green">
      <img
        class="bonus__image"
        src="../img/plus-sign.svg"
        alt="plus-sign"
      />
      Получить баллы
    </button>

    <button class="bonus__btn bonus__btn--yellow">
      <img
        class="bonus__image"
        src="../img/question-sign.svg"
        alt="question-sign"
      />
      Как получить баллы
    </button>

    <button class="bonus__btn bonus__btn--blue">
      <img
        class="bonus__image"
        src="../img/gift.png"
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
  @import '../scss/blocks/bonus.scss';
</style>
