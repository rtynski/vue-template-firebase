import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import './registerServiceWorker';
import { router } from './router';
import store from './store';
import { i18n } from './i18n-setup';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.use(VueI18n);

new Vue({
  router,
  store,
  i18n: i18n(),
  render: (h) => h(App),
}).$mount('#app');
