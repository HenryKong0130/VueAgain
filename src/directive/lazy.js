import eventBus from "@/eventBus";
import { debounce } from "@/utils/index";
import defaultGif from "@/assets/default.gif";

let imgs = [];

function setImage(img) {
  img.dom.src = defaultGif; //先加载一遍图片
  //处理图片
  //图片是否在视口范围内
  const clientHeight = document.documentElement.clientHeight;
  const rect = img.dom.getBoundingClientRect();
  const height = rect.height || 100;
  if (rect.top >= -height && rect.top <= clientHeight) {
    //在视口范围
    img.dom.src = img.src;
    //处理完后就把其删除掉
    imgs = imgs.filter((r) => r !== img);
  }
}

//希望调用次函数，就可以设置那些满足条件的图片
function setImages() {
  for (const img of imgs) {
    //循环处理图片
    setImage(img);
  }
}

// setInterval(() => {
//   console.log(imgs);
// }, 2000);

//处理防抖
function handleScroll(dom) {
  setImages();
}

eventBus.$bus.$on("mainScroll", debounce(handleScroll, 50));

export default {
  inserted(el, bindings) {
    const img = {
      dom: el,
      src: bindings.value,
    };
    imgs.push(img);
    //立即处理一下
    setImage(img);
  },
  unbind(el) {
    imgs = imgs.filter((img) => img.dom !== el);
  },
};
