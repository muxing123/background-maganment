import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import dayjs from 'dayjs';
import http from "./http";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VCharts from 'v-charts'


Vue.prototype.$axios = http;
Vue.prototype.$dayjs = dayjs;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VCharts);

// 响应拦截
axios.defaults.timeout = 10000; // 设置超时时间
// 过滤请求结果 只返回结果的data
axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
