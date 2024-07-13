import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from "vue-i18n";
import en from './locales/en.json'
import fr from './locales/fr.json'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    fr
  }
  // messages: {
  //   en: {
  //     hero: {
  //       hello: 'hello world'
  //     }
  //   },
  //   fr: {
  //     hero: {
  //       hello: 'Salut'
  //     }
  //   }
  // }
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')

//createApp(App).mount('#app')
