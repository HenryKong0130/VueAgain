import Mock from "mockjs";
//配置拦截规则，当“get”请求到"/api/banner"地址时，进行拦截，返回配置的模拟数据
Mock.mock("/api/blog", "get", {
  code: 0,
  msg: "",
  data:[],
});