import Vue from 'vue'
import App from './App.vue'
import './assets/reset.css'
import router from '@/router/index'

Vue.config.productionTip = false

const vm = new Vue({
  render: h => h(App),
  router
}).$mount('#app')
