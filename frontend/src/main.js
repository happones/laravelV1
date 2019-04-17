import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import moment from 'moment';


//assets
import 'bulma/bulma.sass';
import 'buefy/dist/buefy.css';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false;

import axios from 'axios';
import VueAxios from 'vue-axios';
import VueAuth from '@websanova/vue-auth';
import Buefy from 'buefy';
import VueContentPlaceholders from 'vue-content-placeholders';

axios.defaults.baseURL = '/api';
Vue.use(VueContentPlaceholders);
Vue.use(Buefy, {
  defaultIconPack: 'fas',
});
Vue.use(VueAxios, axios);
Vue.router = router;
Vue.use(VueAuth, {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  tokenDefaultName: 'checkify_token',
  fetchData: {url: 'me', method: 'GET', enabled: true},
  refreshData: {url: 'refresh', method: 'GET', enabled: false, interval: 30},
  logoutData: {url: 'logout', method: 'POST', redirect: '/login', makeRequest: false},
  loginData: {url: 'login', method: 'POST', redirect: '/', fetchUser: true},
  registerData: {url: 'register', method: 'POST', redirect: '/login', autoLogin: true },
  rolesVar: 'role'
});

//=========Prototypes=========//
import loader from './loader';
import notify from './notify'

Vue.prototype.$loader = loader;
Vue.prototype.$notify = notify;


//==========================Filters =========================
Vue.filter('date', (date, format = null) => {
  moment.locale('es');
  //
  var today = moment();
  var mutator = moment(date);
  if (format === 'now') {
    return moment(date).fromNow();
  }
  if (format !== null) {
    return moment(date).format(format);
  }
  return moment(date).format('LLLL');
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
