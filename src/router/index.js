import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

const loader = document.querySelector('.loader');

router.beforeEach((to, fr, nx) => {
  loader.style.display = 'flex';
  nx();
});

router.afterEach(() => {
  setTimeout(() => {
    loader.style.display = 'none';
  }, 2000);
});

export default router;
