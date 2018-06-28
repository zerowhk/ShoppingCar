// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入store
import store from './store/index.js'


import App from './App'

Vue.config.productionTip = false

Vue.filter("currency", (value, type, num) => {
  return type + Number(value).toFixed(num).toLocaleString();
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store
})
