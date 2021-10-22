<template>
    <div class="modal">
      <div @click="$emit('close')" class="modal__tint"></div>
      <div class="modal__box">
        <button class="modal__close">
          <img
            @click="$emit('close')"
            class="js-close"
            src="../img/close-big.svg"
            alt="close"
            width="32"
            height="32"
          />
        </button>

        <div class="modal-box__foto-side modal-foto-side">
          <img
            src="../img/image 4.png"
            :alt="cardElem.fotoAlt"
            width="330"
            height="330"
          />
          <div class="modal-foto-side__preview">

            <label class="modal-foto-side__lbl">
              <input class="input-radio" type="radio" name="preview" />
              <div class="modal-foto-side__preview-image">
                <img
                  src="../img/small1.png"
                  alt="preview 1"
                  width="50"
                  height="50"
                />
              </div>
            </label>
            <label class="modal-foto-side__lbl">
              <input class="input-radio" type="radio" name="preview" checked />
              <div class="modal-foto-side__preview-image">
                <img
                  src="../img/small2.png"
                  alt="preview 2"
                  width="50"
                  height="50"
                />
              </div>
            </label>
            <label class="modal-foto-side__lbl">
              <input class="input-radio" type="radio" name="preview" />
              <div class="modal-foto-side__preview-image">
                <img
                  src="../img/small3.png"
                  alt="preview 3"
                  width="50"
                  height="50"
                />
              </div>
            </label>
          </div>
        </div>

        <div class="modal-txt-side">
          <div class="modal-txt-side__title">
            {{cardElem.titleItem}}
          </div>
          <div class="modal-txt-side__price-box price-box">
            <div class="price-box__pricebtn">
              <div class="price-box__price">{{cardElem.priceItem}} баллов</div>
              <button class="price-box__btn">Попросить 50 баллов</button>
            </div>
            <div class="price-box__balance-box">
              <div class="price-box__tvoibalans-box">
                <div class="price-box__balance-title">Твой баланс:</div>
                <div class="price-box__balance">50 баллов</div>
              </div>
              <img src="../img/balans_icon.png" alt="Bags" />
            </div>
          </div>

          <div v-if="cardElem.colors.length > 0" class="modal-colors">
            <div class="options__title">Цвета:</div>
            <div class="options">
              <label v-for="(el,i) in cardElem.colors" :key="i" class="options__box">
                <input class="input-radio" type="radio" name="color" :checked="i===0" />
                <div class="options__tab options__tab--colors">
                  <div
                    class="options__square" :class="{
                      'options__square--blue-color':el.modName === 'blue',
                      'options__square--beige-color':el.modName === 'beige',
                      'options__square--grey-color':el.modName === 'grey',
                      }"
                  ></div>
                  {{el.txt}}
                </div>
              </label>
            </div>
          </div>

          <div v-if="cardElem.sizes.length > 0" class="modal-sizes">
            <div class="options__title">Размер:</div>
            <div class="options">
              <label v-for="(el,i) in cardElem.sizes" :key="i" class="options__box">
                <input class="input-radio" type="radio" name="size" :checked="i===0" />
                <div class="options__tab options__tab--sizes">{{el}}</div>
              </label>
            </div>
          </div>

          <div v-for="(el,i) in cardElem.description" :key="i" class="description">
            <div class="description__title">{{el.title}}</div>
            <div class="description__txt">{{el.txt}}</div>
          </div>
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
  },
};
</script>

<style lang="scss">
  @import '../scss/blocks/modal.scss';
</style>
