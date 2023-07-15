import Vue from 'vue';


/**
 * 事件名：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 *  -滚动的dom元素，如果是undefined，则表示dom元素已经不存在了
 * 
 * 事件名：setMainScroll
 * 含义：当需要设置主区域滚动条位置时触发
 * 参数：
 * -滚动高度
 */
//将事件总线放到vue实例的原型上
Vue.prototype.$bus = new Vue({})










// const listener = {};
// //事件总线
// export default {
//   //监听某一个事件
//   $on(eventName, handler) {
//     if (!listener[eventName]) {
//       listener[eventName] = new Set();
//     }
//     listener[eventName].add(handler);
//   },
//   //取消监听
//   $off(eventName, handler) {
//     if (!listener[eventName]) {
//       return;
//     }
//     listener[eventName].remove(handler);
//   },
//   //触发事件
//   $emit(eventName, ...arg) {
//     if (!listener[eventName]) {
//       return;
//     }
//     for (const handler of listener[eventName]) {
//       handler(...arg);
//     }
//   },
// };
