//入口文件
import "./Mock/index.js"; //执行一遍配置的模拟数据

import Vue from "vue";
import App from "./App.vue";

import "./styles/global.less"; //配置的全局样式

import router from "./router/index.js"; //路由插件

//扩展一个showMessage的vue实例
import showMessage from "./utils/showMessage";
Vue.prototype.$showMessage = showMessage;

//注册一个全局只定义指令,vLoading是它的配置对象
import vLoading from "@/directive/loading.js";
Vue.directive("loading",vLoading);

new Vue({   
  router,
  render: (h) => h(App),
}).$mount("#app");





// import styles from "./styles/message.module.less";
// const div = document.createElement("div");
// div.className = styles.message;
// div.innerText = "你好";
// document.body.appendChild(div);

//向实例注入成员
// Vue.prototype.sayHi = function(){
//   console.log('你好');
// }
