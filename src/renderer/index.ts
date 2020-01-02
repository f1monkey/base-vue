import Vue from "vue";
import App from "common/App.vue";
import store from "common/store";
import router from "common/router";
import ElementUI from "element-ui";

Vue.use(ElementUI);

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: h => h(App)
});
app.$mount("#app");
