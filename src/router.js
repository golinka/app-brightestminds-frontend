import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./layout/pages/Dashboard.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    }
  ]
});
