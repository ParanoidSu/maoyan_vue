import Vue from 'vue'
import App from './App.vue'
import './assets/reset.css'
import Http from '@/utils/http'

Vue.config.productionTip = false


const vm = new Vue({
  render: h => h(App)
}).$mount('#app')
vm.__proto__.http = new Http()