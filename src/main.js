// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* eslint-disable no-new */
var root  = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data(){
  	return {
  		test:'123'
  	}
  }
})
<<<<<<< HEAD
console.log(root.$data)
=======
//console.log(root.$data)
>>>>>>> cffcdfa21565dd716edd0716132c3838991bccf4
