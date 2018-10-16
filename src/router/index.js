import Vue from 'vue';
import Router from 'vue-router';
import Container from '@/components/Container';
import ServicePage from '@/components/ServicePage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Container',
      component: Container,
    },
    {
      path: '/service/:serviceId',
      name: 'ServicePage',
      component: ServicePage,
    },
  ],
});
