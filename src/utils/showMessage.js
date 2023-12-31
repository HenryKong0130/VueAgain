import getComponentRootDom from "./getComponentRootDom";
import Icon from "../components/Icon/index.vue";
import styles from "./showMessage.module.less";
/**
 *
 * @param {String} content 消息内容
 * @param {String} type 消息类型
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 附着的容器
 */
export default function (options = {}) {
  const content = options.content || "";
  const type = options.type || "info";
  const duration = options.duration || 2000;
  const container = options.container || document.body;

  //生成消息内容
  const div = document.createElement("div");
  const iconDom = getComponentRootDom(Icon, { type });
  div.innerHTML = `<span class=${styles.icon}>${iconDom.outerHTML}</span><div>${content}</div>`;

  //设置div的样式
  const typeClassName = styles[`message-${type}`]; //类型样式名
  div.className = `${styles.message} ${typeClassName} `;

  //将div加入到容器中
  if (options.container) {
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }
  }

  container.appendChild(div);
  //浏览器强行渲染
  div.clientHeight; //导致重排
  //回归到正常位置
  div.style.opacity = 1;
  div.style.transform = `translate(-50%,-50%)`;

  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = `translate(-50%,-50%) translateY(-25px)`;
    div.addEventListener(
      "transitionend",
      function () {
        div.remove();
        //运行回调函数
        options.callback && options.callback();
      },
      { once: true }
    );
  }, duration);
}
