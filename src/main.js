import Vue from 'vue'
import App from './App.vue'
import router from './router'
import NavHeader from './components/NavHeader/NavHeader'
import Star from './components/Star/Star'
import store from './store'


Vue.component('NavHeader',NavHeader)
Vue.component('Star',Star)


new Vue({
  el:'#app',
  render:h=>h(App),
  router,
  store
})
