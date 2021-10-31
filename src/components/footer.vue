<template>
  <footer class="footer">
    <div class="footer__social">
      <div class="footer__social-kolesa">
        <a class="footer__social-link" href="#">© Kolesa Group</a>
      </div>
      <div class="footer__social-other">
        <a class="footer__social-link" href="#">
          <img
            src="../img/Instagram.svg"
            alt="Instagram"
            width="24"
            height="24"
          />
        </a>
        <a class="footer__social-link" href="#">
          <img
            src="../img/YouTube.svg"
            alt="YouTube"
            width="24"
            height="24"
          />
        </a>
        <a class="footer__social-link" href="#">
          <img src="../img/VK.svg" alt="VK" width="24" height="24" />
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
  @import '../scss/blocks/footer.scss';
</style>
