import Vue from 'vue';
import Router from 'vue-router';
import About from '../components/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
