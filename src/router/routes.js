import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop/shop.vue'),
  },
  {
    path: '/shop/how-get-score',
    name: 'HowGetScore',
    component: () => import(/* webpackChunkName: "how-get-score" */ '../views/shop/components/howGetScore.vue'),
  },
];

export default routes;
