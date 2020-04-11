import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default async () => {
  const resp = await fetch('http://localhost:8081/');
  const messages = await resp.json();
  return new VueI18n({
    locale: 'en',
    messages,
  });
};
