import axios from "axios";
import { showMessage } from "@/utils/index.js";

const ins = axios.create();

ins.interceptors.response.use(function (resp) {
  // console.log("我是拦截器request,我先执行处理完再把结果返回给你");
  if (resp.data.code !== 0) {
    showMessage({
      content: resp.data.msg,
      type: "error",
    });
    return null
  }
  return resp.data.data;
});

export default ins;
