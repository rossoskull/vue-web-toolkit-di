import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap';
import 'bootstrap-vue';
import 'bootstrap-italia';

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/css/bootstrap-vue.min.css'
import 'bootstrap-italia/dist/scss/bootstrap-italia.min.css'


import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
