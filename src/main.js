import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import fastclick from 'fastclick'

// Vue.config.productionTip = false
import './common/stylus/index.styl'
fastclick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
