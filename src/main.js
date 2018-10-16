// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import App from './App';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

const shared = new Vue({
  data: {
    api: 'http://localhost:3000/',
    lang: 'es',
  },
});

shared.install = () => {
  Object.defineProperty(Vue.prototype, '$globalVariables', {
    get() { return shared; },
  });
};
Vue.use(shared);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
