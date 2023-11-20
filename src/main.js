import Vue, { createApp } from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { createVuetify } from 'vuetify'
import router from './router'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import './style.css'
import App from './App.vue'
const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives,
})
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
app.use(router)
app.use(vuetify)
app.mount('#app')
