<template>
    <div class="modal">
      <div @click="$emit('close')" class="modal__tint"></div>
      <div v-if="!congrats" class="modal__box">
        <button class="modal__close">
          <img
            @click="$emit('close')"
            src="../img/close-big.svg"
            alt="close"
            width="32"
            height="32"
          />
        </button>

        <div class="modal-box__foto-side modal-foto-side">
          <div class="modal-foto-side__image">
            <img
              :src="cardElem.mainImage"
              :alt="cardElem.title"
              width="330"
              height="330"
            />
          </div>

          <div
          v-if="cardElem.images && cardElem.images.length > 0"
          class="modal-foto-side__preview"
          >
            <label v-for="(el,i) in cardElem.images"
              :key="i"
              class="modal-foto-side__lbl">
              <input
              class="input-radio"
              type="radio"
              name="preview"
              :checked="i===0"
              />
              <div class="modal-foto-side__preview-image">
                <img
                  :src="el"
                  :alt="`preview ${i}`"
                  width="50"
                  height="50"
                />
              </div>
            </label>
          </div>
        </div>

        <div class="modal-txt-side">
          <div class="modal-txt-side__title">
            Футболка {{cardElem.title}}
          </div>
          <div class="modal-txt-side__price-box price-box">
            <div class="price-box__pricebtn">
              <div class="price-box__price">
                {{ cardElem.price }} {{checkBall(cardElem.price)}}
              </div>
              <button
              v-if="cardElem.price>userScore"
              @click="$emit('close', -50)"
              class="price-box__btn price-box__btn--more-score"
              >
              Попросить 50 баллов
              </button>
              <button
              v-else
              @click="modalClose"
              class="price-box__btn"
              >
              Заказать
              </button>
            </div>
            <div class="price-box__balance-box">
              <div class="price-box__tvoibalans-box">
                <div class="price-box__balance-title">Твой баланс:</div>
                <div class="price-box__balance">
                  {{ userScore }} {{checkBall(userScore)}}
                </div>
              </div>
              <img src="../img/balans_icon.png" alt="Bags" />
            </div>
          </div>

          <div
          v-if="cardElem.colors && cardElem.colors.length > 0"
          class="modal-colors"
          >
            <div class="options__title">Цвета:</div>
            <div class="options">
              <label
              v-for="(el,i) in cardElem.colors"
              :key="i"
              class="options__box"
              >
                <input
                class="input-radio"
                type="radio"
                name="color"
                :checked="i===0" />
                <div class="options__tab options__tab--colors">
                  <div
                    class="options__square"
                    :style="{background: el.color}"
                  ></div>
                  {{el.label}}
                </div>
              </label>
            </div>
          </div>

          <div
          v-if="cardElem.sizes && cardElem.sizes.length > 0"
          class="modal-sizes"
          >
            <div class="options__title">Размер:</div>
            <div class="options">
              <label
              v-for="(el,i) in cardElem.sizes"
              :key="i"
              class="options__box"
              >
                <input
                class="input-radio"
                type="radio"
                name="size"
                :checked="i===0"
                />
                <div class="options__tab options__tab--sizes">{{el}}</div>
              </label>
            </div>
          </div>

          <div
          v-if="cardElem.volumes && cardElem.volumes.length > 0"
          class="modal-volumes"
          >
            <div class="options__title">Volumes:</div>
            <div class="options">
              <label
              v-for="(el,i) in cardElem.volumes"
              :key="i"
              class="options__box"
              >
                <input
                class="input-radio"
                type="radio"
                name="volumes"
                :checked="i===0"
                />
                <div class="options__tab options__tab--sizes">{{el}}</div>
              </label>
            </div>
          </div>

          <div class="description">
            <!-- <div
            v-if="el.title"
            class="description__title"
            >
            {{el.title}}
            </div> -->
            <div class="description__txt">
              {{cardElem.description}}
            </div>
          </div>
        </div>
      </div>
      <div
      v-else
      class="modal__box">
        <div class="modal__congrats">Congtats!</div>
        <div class="price-box__balance-box">
          <div class="price-box__tvoibalans-box">
            <div class="price-box__balance-title">Твой баланс:</div>
            <div class="price-box__balance">
              {{ userScore - cardElem.price}} {{checkBall(userScore - cardElem.price)}}
            </div>
          </div>
          <img src="../img/balans_icon.png" alt="Bags" />
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    cardElem: {
      type: Object,
      required: true,
    },
    userScore: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      congrats: false,
    };
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
    modalClose() {
      this.congrats = true;
      setTimeout(() => {
        this.congrats = false;
        this.$emit('close', this.cardElem.price);
      }, 2000);
    },
  },
};
</script>

<style lang="scss">
  @import '../scss/blocks/modal.scss';
</style>
