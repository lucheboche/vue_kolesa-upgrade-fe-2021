<template>
  <div id="app">
    <div v-if="isModalOpened" class="modal">
      <div class="modal__box">
        <button class="modal__close">
          <img
            @click="modalClose"
            class="js-close"
            src="../src/img/close-big.svg"
            alt="close"
            width="32"
            height="32"
          />
        </button>

        <div class="modal-box__foto-side modal-foto-side">
          <img
            src="../src/img/image 4.png"
            :alt="cardEl.fotoAlt"
            width="330"
            height="330"
          />
          <div class="modal-foto-side__preview">

            <label class="modal-foto-side__lbl">
              <input class="input-radio" type="radio" name="preview" />
              <div class="modal-foto-side__preview-image">
                <img
                  src="../src/img/small1.png"
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
                  src="../src/img/small2.png"
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
                  src="../src/img/small3.png"
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
            {{cardEl.titleItem}}
          </div>
          <div class="modal-txt-side__price-box price-box">
            <div class="price-box__pricebtn">
              <div class="price-box__price">{{cardEl.priceItem}} баллов</div>
              <button class="btn price-box__btn">Попросить 50 баллов</button>
            </div>
            <div class="price-box__balance-box">
              <div class="price-box__tvoibalans-box">
                <div class="price-box__balance-title">Твой баланс:</div>
                <div class="price-box__balance">50 баллов</div>
              </div>
              <img src="../src/img/balans_icon.png" alt="Bags" />
            </div>
          </div>

          <div v-if="cardEl.colors.length > 0" class="modal-colors">
            <div class="options__title">Цвета:</div>
            <div class="options">
              <label v-for="(el,i) in cardEl.colors" :key="i" class="options__box">
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

          <div v-if="cardEl.sizes.length > 0" class="modal-sizes">
            <div class="options__title">Размер:</div>
            <div class="options">
              <label v-for="(el,i) in cardEl.sizes" :key="i" class="options__box">
                <input class="input-radio" type="radio" name="size" :checked="i===0" />
                <div class="options__tab options__tab--sizes">{{el}}</div>
              </label>
            </div>
          </div>

          <div v-for="(el,i) in cardEl.description" :key="i" class="description">
            <div class="description__title">{{el.title}}</div>
            <div class="description__txt">{{el.txt}}</div>
          </div>
        </div>
      </div>
    </div>

    <header class="header">
      <div class="header__big-logo">
        <a href="#" class="header__big-logo-link">
          <img src="../src/img/logo.svg" alt="logo" width="215" height="35" />
        </a>
      </div>
      <div class="header__search">
        <button class="btn header__search-btn">
          <img src="../src/img/search-big.svg" alt="search" />
        </button>
        <input class="header__search-input" type="text" placeholder="Поиск" />
      </div>
      <div class="header__user">
        <button class="btn header__user-btn">
          <img
            class="header__user-image"
            src="../src/img/userpic.png"
            alt="userpic"
            width="44"
            height="44"
          />
          <div class="header__user-info">
            <div class="header__user-name">Мортиджан</div>
            <div class="header__user-balance">300 баллов</div>
          </div>
        </button>
      </div>
    </header>

    <section class="section">
      <nav class="menu section__menu">
        <ul class="menu__link-box">
          <li class="menu__link-item">
            <a class="menu__link" href="#">Оргсхема</a>
          </li>
          <li class="menu__link-item">
            <a class="menu__link" href="#">Kolesa Team</a>
          </li>
          <li class="menu__link-item menu__link-item--bolds">
            <a class="menu__link" href="#">Kolesa Shop</a>
          </li>
          <li class="menu__link-item">
            <a class="menu__link" href="#">Картина компании</a>
          </li>
          <li class="menu__link-item">
            <a class="menu__link" href="#">Новости</a>
          </li>
          <li class="menu__link-item">
            <a class="menu__link" href="#">Education</a>
          </li>
          <li class="menu__link-item">
            <a class="menu__link" href="#">Guidelines</a>
          </li>
          <li class="menu__link-item">
            <a class="menu__link" href="#">Библиотека</a>
          </li>
          <li class="menu__link-item">
            <a class="menu__link" href="#">FAQ</a>
          </li>
        </ul>
      </nav>

      <div class="section__content content">
        <div class="content__banner"></div>

        <div class="content__bonus bonus">
          <button class="bonus__btn bonus__btn--green btn">
            <img
              class="bonus__image"
              src="../src/img/plus-sign.svg"
              alt="plus-sign"
            />
            Получить баллы
          </button>
          <button class="bonus__btn bonus__btn--yellow btn">
            <img
              class="bonus__image"
              src="../src/img/question-sign.svg"
              alt="question-sign"
            />
            Как получить баллы
          </button>
          <button class="bonus__btn bonus__btn--blue btn">
            <img
              class="bonus__image"
              src="../src/img/gift.png"
              alt="gift"
            />
            Подарить баллы
          </button>
        </div>

        <div class="content__options options">
          <label class="options__box">
            <input @change="optionsType=0"
            class="input-radio js-tab" type="radio" name="tab" checked />
            <div class="options__tab options__tab--main">Все товары</div>
          </label>
          <label class="options__box">
            <input @change="optionsType=1" class="input-radio js-tab" type="radio" name="tab" />
            <div class="options__tab options__tab--main">Одежда</div>
          </label>
          <label class="options__box">
            <input @change="optionsType=2" class="input-radio js-tab" type="radio" name="tab" />
            <div class="options__tab options__tab--main">Аксессуары</div>
          </label>
        </div>

        <div class="cards content__cards">
          <div v-for="element in cardsMassiveComputed"
            :key="element.idItem" class="card-item js-card" @click="modalOpen(element)">
            <div class="card-item__image">
              <img
                src="../src/img/image 4.png"
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
      </div>
    </section>

    <footer class="footer">
      <div class="footer__social">
        <div class="footer__social-kolesa">
          <a class="footer__social-link" href="#">© Kolesa Group</a>
        </div>
        <div class="footer__social-other">
          <a class="footer__social-link" href="#">
            <img
              src="../src/img/Instagram.svg"
              alt="Instagram"
              width="24"
              height="24"
            />
          </a>
          <a class="footer__social-link" href="#">
            <img
              src="../src/img/YouTube.svg"
              alt="YouTube"
              width="24"
              height="24"
            />
          </a>
          <a class="footer__social-link" href="#">
            <img src="../src/img/VK.svg" alt="VK" width="24" height="24" />
          </a>
        </div>
      </div>

      <div class="footer__text">
        Есть идеи что улучшить?<br />Не знаешь, с кем решить проблему?
      </div>

      <button class="footer__btn btn">Написать</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      isModalOpened: false,
      cardsMassive: [
        {
          idItem: 10,
          typeItem: 1,
          fotoUrl: '../src/img/image 4.png',
          fotoAlt: 't-shirt',
          newItem: false,
          priceItem: 220,
          titleItem: 'Футболка "Эволюционируй или Эволюционируй или"',
          colors: [
            { modName: 'blue', txt: 'синий' },
            { modName: 'beige', txt: 'бежевый' },
            { modName: 'grey', txt: 'серый' },
          ],
          sizes: ['s', 'm', 'l'],
          description: [
            {
              title: 'Детали:',
              txt: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
            },
            {
              title: 'Как выбрать размер:',
              txt: 'Написать дяде Рику для уточнения.',
            },
          ],
        },
        {
          idItem: 20,
          typeItem: 1,
          fotoUrl: '../src/img/image 4.png',
          fotoAlt: 't-shirt',
          newItem: true,
          priceItem: 1100,
          titleItem: 'Футболка Эволюционируй или Эволюционируй или',
          colors: [
            { modName: 'blue', txt: 'синий' },
            { modName: 'grey', txt: 'серый' },
            { modName: 'beige', txt: 'бежевый' },
            { modName: 'grey', txt: 'серый' },
          ],
          sizes: ['m', 'l'],
          description: [
            {
              title: 'Детали:',
              txt: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
            },
            {
              title: 'Как выбрать размер:',
              txt: 'Написать дяде Рику для уточнения.',
            },
          ],
        },
        {
          idItem: 30,
          typeItem: 2,
          fotoUrl: '../src/img/image 7.png',
          fotoAlt: 'shirt',
          newItem: false,
          priceItem: 180,
          titleItem: 'Недохуди Эволюционируй или Эволюционируй или',
          colors: [
            { modName: 'blue', txt: 'синий' },
            { modName: 'beige', txt: 'бежевый' },
            { modName: 'grey', txt: 'серый' },
          ],
          sizes: ['s', 'm', 'l'],
          description: [
            {
              title: 'Детали:',
              txt: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
            },
            {
              title: 'Как выбрать размер:',
              txt: 'Написать дяде Рику для уточнения.',
            },
          ],
        },
        {
          idItem: 40,
          typeItem: 2,
          fotoUrl: '../src/img/image 7.png',
          fotoAlt: 'shirt',
          newItem: true,
          priceItem: 1400,
          titleItem:
            'Недохуди С размером 66L "Эволюционируй или Эволюционируй или"',
          colors: [
            { modName: 'blue', txt: 'синий' },
            { modName: 'beige', txt: 'бежевый' },
          ],
          sizes: ['s', 'm', 'l', 'xxl'],
          description: [
            {
              title: 'Детали:',
              txt: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
            },
          ],
        },
        {
          idItem: 50,
          typeItem: 1,
          fotoUrl: '../src/img/image 4.png',
          fotoAlt: 't-shirt',
          newItem: true,
          priceItem: 2200,
          titleItem: 'Футболка "У которой нет размеров, но зато есть цвета"',
          colors: [
            { modName: 'blue', txt: 'синий' },
            { modName: 'beige', txt: 'бежевый' },
            { modName: 'grey', txt: 'серый' },
            { modName: 'blue', txt: 'синий' },
            { modName: 'beige', txt: 'бежевый' },
            { modName: 'grey', txt: 'серый' },
          ],
          sizes: [],
          description: [
            {
              title: 'Детали:',
              txt: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
            },
            {
              title: 'Как выбрать размер:',
              txt: 'Написать дяде Рику для уточнения.',
            },
          ],
        },
      ],
      cardEl: {},
      optionsType: 0,
    };
  },
  computed: {
    cardsMassiveComputed() {
      if (this.optionsType > 0) {
        const arr = this.cardsMassive.filter((card) => card.typeItem === this.optionsType);
        return this.sortArray(arr);
      }
      return this.sortArray(this.cardsMassive);
    },
  },
  methods: {
    modalClose() {
      this.isModalOpened = false;
      document.body.style.overflowY = 'visible';
    },
    modalOpen(el) {
      this.cardEl = el;
      this.isModalOpened = true;
      document.body.style.overflow = 'hidden';
    },
    sortArray(arr) {
      arr.sort((b, a) => {
        if (a.newItem > b.newItem) {
          return 1;
        }

        if (a.newItem < b.newItem) {
          return -1;
        }

        return 0;
      });
      return arr;
    },
  },
};
</script>

<style lang="scss">
@import "./src/scss/main.scss";
</style>
