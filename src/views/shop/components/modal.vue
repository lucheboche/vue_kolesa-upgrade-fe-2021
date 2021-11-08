<template>
    <div class="modal">

      <div
      @click="$emit('close')"
      class="modal__tint"
      ></div>

      <div v-if="!congrats" class="modal__box">
        <button
        @click="$emit('close')"
        class="modal__close"
        >
          <img
            src="@/img/close-big.svg"
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
            {{cardElem.title}}
          </div>
          <div class="modal-txt-side__price-box price-box">
            <div class="price-box__pricebtn">
              <div class="price-box__price">
                {{ cardElem.price }} {{checkBall(cardElem.price)}}
              </div>
              <button
              v-if="cardElem.price>userScore"
              @click="$emit('close')"
              class="price-box__btn price-box__btn--more-score"
              >
              Попросить {{cardElem.price-userScore}} {{checkBall(cardElem.price-userScore)}}
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
              <img src="@/img/balans_icon.png" alt="Bags" />
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
            <div class="description__title">
              Детали:
            </div>
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
              {{userScore}} {{checkBall(userScore)}}
            </div>
          </div>
          <img src="@/img/balans_icon.png" alt="Bags" />
        </div>
      </div>
    </div>
</template>

<script>
import checkBall from '@/js/checkBall';

export default {
  name: 'Modal',
  props: {
    cardElem: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      congrats: false,
    };
  },
  computed: {
    userScore() {
      return this.$store.state.userData.score;
    },
  },
  methods: {
    checkBall,
    modalClose() {
      this.$store.commit('UserScore', this.cardElem.price);
      this.congrats = true;
      setTimeout(() => {
        this.congrats = false;
        this.$emit('close');
      }, 2000);
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/vars.scss';
@import '@/scss/mixin.scss';

.modal {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    z-index: 10;

    &__tint {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: $main-color;
        opacity: 0.6;
        cursor: pointer;
        z-index: -1;
    }

    &__box {
        position: relative;
        display: flex;
        gap: 24px;
        background: white;
        border-radius: 16px;
        padding: 56px;
    }

    &__close {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 24px;
        right: 24px;
        background-color: unset;
        cursor: pointer;
    }

    &__congrats {
        position: relative;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
    }
}

.modal-foto-side {
    @include flexcol;

    gap: 16px;

    &__image {
        border-radius: 8px;
        overflow: hidden;
    }

    &__preview {
        display: flex;
        justify-content: center;
        width: 330px;
        flex-wrap: wrap;
        gap: 8px;
    }

    &__preview-image {
        position: relative;
        width: 50px;
        height: 50px;
        border-radius: 8px;
        cursor: pointer;
        overflow: hidden;
    }

    .input-radio:checked + &__preview-image::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 50px;
        height: 50px;
        border-radius: 8px;
        z-index: 3;
        border: 1px solid $second-color;
    }
}

.modal-txt-side {
    @include flexcol;

    padding: 8px 0;
    width: 574px;
    gap: 24px;

    &__title {
        @include font20;

        text-transform: capitalize;
    }

    &__price-box {
        margin-top: -8px;
    }
}

.price-box {
    display: flex;
    justify-content: space-between;

    &__pricebtn {
        @include flexcol;

        justify-content: space-between;
    }

    &__price {
        @include font20;

        font-weight: 600;
        transform: translateY(-8px);
    }

    &__btn {
        @include boxsh;
        @include btn;

        border-radius: 8px;
        padding: 0 20px;
        min-width: 184px;
        height: 36px;
        color: white;
        background: $second-color;
        transition: 0.1s box-shadow ease-out;

        &--more-score {
            color: $main-color;
            background: $btn-bg-color-yellow;
        }
    }

    &__btn:active {
        @include boxsh($none-color);
    }

    &__balance-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 196px;
        height: 68px;
        background: $balans-bg-color;
        border-radius: 16px;
        padding: 8px 16px;
    }

    &__tvoibalans-box {
        @include flexcol;

        justify-content: space-between;
    }

    &__balance-title {
        color: $title-color-grey;
    }

    &__balance {
        font-size: 16px;
    }
}

.description {
    &__title {
        font-weight: 600;
        margin-bottom: 4px;
    }
}

</style>
