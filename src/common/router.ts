import Vue from "vue";
import Router from "vue-router";
import Main from "common/views/Main.vue";

Vue.use(Router);
export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "main",
      component: Main
    }
  ]
});
