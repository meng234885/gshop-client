import Vue from 'vue'
import VueRouters from 'vue-router'
import routes from './routers.js'

Vue.use(VueRouters)

export default new VueRouters({
  mode: 'history',
  routes
})
