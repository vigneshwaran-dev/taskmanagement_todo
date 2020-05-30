import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./views/Home.vue";
import Login from "./views/Login.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode : 'history',
  routes: [
    {
      path: "/signin",
      component: Login,
    },
    {
      path: "*",
      component: Home,
    },
  ],
  linkActiveClass: "active",
});

export default router;
