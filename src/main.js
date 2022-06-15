import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

axios.defaults.baseURL = process.env.VUE_APP_API_URL || 'http://localhost:4000'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
