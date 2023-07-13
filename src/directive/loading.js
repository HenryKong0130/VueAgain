import imageUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";

//得到el中具有loading效果的img元素
function getLoadingImage(el) {
  return el.querySelector("img[data-role=loading");
}

//创建具有loading效果的img
function createLoadingImage() {
  const img = document.createElement("img");
  img.dataset.role = "loading";
  img.src = imageUrl;
  img.className = styles.loading;
  return img;
}

// 配置一个自定义指令对象
export default function (el, binding) {
  // 根据binding.value的值，判断添加或者删除img
  const curImg = getLoadingImage(el);
  //如果正在加载中，那么需要此img
  if (binding.value) {
    if (!curImg) {
      const img = createLoadingImage();
      el.appendChild(img);
    }
  } else {
    if (curImg) {
      curImg.remove();
    }
  }
}
