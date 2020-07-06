import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import router from './router'
import VeeValidate from 'vee-validate';
import store from './store'


import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css' 


Vue.use(Vuetify, {
  iconfont: 'md, mdi, fa, fa4' // default - only for display purposes
});
Vue.use(VeeValidate);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app')
