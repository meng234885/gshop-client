import Vue from 'vue'
import App from './App.vue'
import router from './router'
import NavHeader from './components/NavHeader/NavHeader'
import Star from './components/Star/Star'
import store from './store'
import {Button} from 'mint-ui'


Vue.component('NavHeader',NavHeader)
Vue.component('Star',Star)
Vue.component(Button.name,Button)


new Vue({
  el:'#app',
  render:h=>h(App),
  router,
  store
})
