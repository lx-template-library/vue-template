import "./utils/rem";
import Vue from "vue";
import md5 from "js-md5";
import store from "./store";
import App from "./App.vue";
import router from "./router";
import axios from "./utils/http";
import {formatDate} from "./utils/date";
import { SetCookies, GetCookies, DelCookies } from "./utils/setCookies.js";

Vue.config.productionTip = false;

Vue.prototype.$formatDate = formatDate;
Vue.prototype.$setCookie = SetCookies;
Vue.prototype.$getCookie = GetCookies;
Vue.prototype.$delCookie = DelCookies;
Vue.prototype.$axios = axios;
Vue.prototype.$md5 = md5;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
