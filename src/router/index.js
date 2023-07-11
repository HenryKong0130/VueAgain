import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter); //使用一个路由插件

import routes from "./routes.js";

const router = new VueRouter({
  //配置
  routes,//路由匹配规则
  mode:"history"
});

export default router;
