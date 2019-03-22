import Vue from 'vue'
import App from './App.vue'
import HttpPlugin from './plugins/http_plugin'

import router from './router'

Vue.use(HttpPlugin)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
