<template>
  <div class="content">
    <div class="content__path">
      <router-link to="/shop" class="content__path-link">
        Kolesa Shop</router-link
      >&nbsp;/
      <router-link to="/shop/how-get-score" class="content__path-link">
        Как получить баллы</router-link
      >
    </div>
    <div class="content__page-title">Как получить баллы</div>
    <div class="content__conf-cards">
      <div
      v-for="(el,i) in cardsInfo"
      :key="i"
      class="content__conf-item">
        <div class="content__conf-text">
          <img
            src="@/img/conference0.svg"
            alt="icon"
            width="48"
            height="48"
          />
          <div class="content__conf-title">{{ el.title }}</div>
          <div class="content__conf-price">
            {{ el.price }} {{ checkBall(el.price) }}
          </div>
          <div class="content__conf-article">
            {{ el.article }}
          </div>
        </div>
        <button class="content__conf-btn">Отправить заявку</button>
      </div>
    </div>
  </div>
</template>

<script>
import checkBall from '@/js/checkBall';

export default {
  name: 'HowGetScore',
  methods: {
    checkBall,
  },
  data() {
    return {
      cardsInfo: [
        {
          title: 'Выступление на конференциях',
          price: 90,
          article:
            'Стань спикером на международной конференции по своему направлению',
        },
        {
          title: 'Выступление на meetup',
          price: 60,
          article:
            'Стань спикером в Колёсах и на meetup других компаний. Расскажи о наших продуктах и технологиях которые мы используем',
        },
        {
          title: 'Статья на habr/vc.ru/rusbase',
          price: 60,
          article:
            'Подготовь качественный контент, напиши и опубликуй статью на профильную тему',
        },
        {
          title: 'Поделись профессиональными знаниями с коллегами',
          price: 60,
          article:
            'Поделись профессиональными знаниями с коллегами. Важно обучить не менее 6 человек',
        },
        {
          title: 'Организация мероприятия',
          price: 60,
          article:
            'Организуй турнир по командным играм в офисе. ЧГК, настольный теннис и другие направления. Не менее 10 участников в турнире',
        },
        {
          title: 'Стань ментором в проекте «Kolesa Academy»',
          price: 90,
          article:
            'Стань ментором академиков, поделись своими знаниями и помоги ребятам завершить Kolesa Academy успешно',
        },
        {
          title: 'Помощь HR team',
          price: 50,
          article: 'Помоги организовать мероприятие',
        },
        {
          title: 'Выступление на Demoday',
          price: 30,
          article:
            'Выступи на Demoday внутри своей команды и поделись знаниями',
        },
        {
          title: 'Другое',
          article: 'Получай баллы если уже что-то сделано',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/vars.scss";
@import "@/scss/mixin.scss";

.content {
  &__path {
    margin-bottom: 24px;
    color: $second-color;
  }

  &__path-link {
    color: $second-color;
    text-decoration: none;
  }

  &__path-link:hover {
    text-decoration: underline;
  }

  &__page-title {
    @include font20;

    font-weight: 600;
    margin-bottom: 16px;
  }

  &__conf-cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 330px);
    gap: 24px;
    margin-bottom: 68px;
  }

  &__conf-item {
    @include flexcol;
    @include boxsh;

    height: 324px;
    padding: 24px;
    justify-content: space-between;
    border-radius: 16px;
    cursor: pointer;
  }

  &__conf-text {
    @include flexcol;

    align-items: flex-start;
    gap: 8px;
  }

  &__conf-title {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: $main-color;
  }

  &__conf-price {
    font-size: 13px;
    line-height: 20px;
    background: $payed-blue;
    padding: 0 12px;
    border-radius: 4px;
  }

  &__conf-article {
    color: $main-color;
  }

  &__conf-btn {
    @include boxsh;
    @include btn;

    font-size: 16px;
    line-height: 24px;
    width: 282px;
    height: 44px;
    border-radius: 8px;
    background: $second-color;
    color: white;
    transition: 0.1s box-shadow ease-in;

    &:active {
      box-shadow: 0 2px 4px $none-color;
    }
  }
}
</style>
