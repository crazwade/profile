import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import { createI18n } from 'vue-i18n';
import 'element-plus/dist/index.css';

import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import en from './lang/en.json';
import zh from './lang/zh.json';

const i18n = createI18n({
  legacy: false,
  locale: 'en', // 預設語言
  messages: {
    en,
    zh,
  },
});

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(ElementPlus);

app.use(i18n);
app.mount('#app');
