import Vue from 'vue'
import App from './App.vue'
import router from './router'
import NavHeader from './components/NavHeader/NavHeader'

Vue.component('NavHeader',NavHeader)

new Vue({
  el:'#app',
  render:h=>h(App),
  router,
})
