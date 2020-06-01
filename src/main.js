import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VCalendar from 'v-calendar';

Vue.config.productionTip = false;
Vue.use(VCalendar);

//Set the server API address here
Vue.prototype.$API = 'https://todoserver-hackerearth.herokuapp.com';

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
