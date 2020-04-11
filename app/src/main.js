import Vue from 'vue';
import App from './App.vue';
import createI18n from './createI18n';

Vue.config.productionTip = false;

(async () => {
  new Vue({
    i18n: await createI18n(),
    render: (h) => h(App),
  }).$mount('#app');
})();
