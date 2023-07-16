//入口文件
import "./Mock/index.js"; //执行一遍配置的模拟数据

import Vue from "vue";
import App from "./App.vue";
import store from "@/store/index.js";
import "./styles/global.less"; //配置的全局样式

import router from "./router/index.js"; //路由插件

//扩展一个showMessage的vue实例
import showMessage from "./utils/showMessage";
Vue.prototype.$showMessage = showMessage;

//注册一个全局只定义指令,vLoading是它的配置对象
import vLoading from "@/directive/loading.js";
import vLazy from "@/directive/lazy.js";
Vue.directive("loading", vLoading);
Vue.directive("lazy", vLazy);

//事件总线
import "./eventBus.js";
store.dispatch("setting/fetchSetting");

import {
  getBlogTypes,
  getBlogs,
  getBlog,
  postComment,
  getComments,
} from "./api/blog.js";

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");

window.store = store
// import { getSetting } from "./api/setting.js";
// getSetting().then((resp) => {
//   console.log(resp);
// });
// getBlogTypes().then(r=>{
//   console.log('123',r);
// })

// getBlogs(1,20,3).then(r=>{
//   console.log('456',r);
// })

// getBlog(2).then((r) => {
//   console.log("getBlog", r);
// });

// postComment({
//   nickname: "henry",
//   content: "你好",
//   blogId: 2,
// }).then((r) => {
//   console.log("postComment", r);
// });

// getComments(2, 4, 5).then((r) => {
//   console.log("getComments", r);
// });
// import styles from "./styles/message.module.less";
// const div = document.createElement("div");
// div.className = styles.message;
// div.innerText = "你好";
// document.body.appendChild(div);

//向实例注入成员
// Vue.prototype.sayHi = function(){
//   console.log('你好');
// }
