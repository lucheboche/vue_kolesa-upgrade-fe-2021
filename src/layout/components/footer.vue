<template>
  <footer class="footer">
    <div class="footer__social">
      <div class="footer__social-kolesa">
        <a class="footer__social-link" href="#">© Kolesa Group</a>
      </div>
      <div class="footer__social-other">
        <a class="footer__social-link" href="#">
          <img
            src="@/img/Instagram.svg"
            alt="Instagram"
            width="24"
            height="24"
          />
        </a>
        <a class="footer__social-link" href="#">
          <img
            src="@/img/YouTube.svg"
            alt="YouTube"
            width="24"
            height="24"
          />
        </a>
        <a class="footer__social-link" href="#">
          <img src="@/img/VK.svg" alt="VK" width="24" height="24" />
        </a>
      </div>
    </div>

    <div class="footer__text">
      Есть идеи что улучшить?<br />Не знаешь, с кем решить проблему?
    </div>

    <button class="footer__btn">Написать</button>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">
@import '@/scss/vars.scss';
@import '@/scss/mixin.scss';

.footer {
    padding: 0 $calc-width 0 $calc-width;
    display: grid;
    grid-template-columns: 948px auto auto;
    background-color: $main-color;

    &__social {
        @include flexcol;

        padding: 20px 0 20px 32px;
        align-self: center;
        align-items: flex-start;
        justify-content: space-around;
    }

    &__social-kolesa {
        font-size: 16px;
        margin-bottom: 8px;
    }

    &__social-link {
        color: white;
        text-decoration: none;
    }

    &__social-other {
        display: flex;
        gap: 12px;
    }

    &__text {
        color: white;
        align-self: center;
    }

    &__btn {
        @include boxsh;
        @include btn;

        width: 150px;
        height: 36px;
        margin: 0 40px;
        color: $second-color;
        background: white;
        border: $main-box;
        border-radius: 8px;
        align-self: center;

        &:hover {
            color: white;
            background: $second-color;
        }
    }
}

</style>
