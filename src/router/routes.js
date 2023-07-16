import Home from "../views/Home";
import Blog from "../views/Blog";
import Project from "../views/Project";
import About from "../views/About";
import Message from "../views/Message";
import BlogDetail from "../views/Blog/Detail/Detail.vue";

const routes = [
  {
    name: "Home",
    path: "/home",
    component: Home,
    meta: {
      title: "首页",
    },
  },
  {
    name: "Blog",
    path: "/article",
    component: Blog,
    meta: {
      title: "博客",
    },
  },
  {
    name: "CategoryId",
    path: "/article/cate/:categoryId",
    component: Blog,
    meta: {
      title: "博客",
    },
  },
  {
    name: "BlogDetail",
    path: "/article/:id",
    component: BlogDetail,
    meta: {
      title: "博客详情",
    },
  },
  {
    name: "Project",
    path: "/project",
    component: Project,
    meta: {
      title: "项目和效果",
    },
  },
  {
    name: "About",
    path: "/about",
    component: About,
    meta: {
      title: "关于我",
    },
  },
  {
    name: "Message",
    path: "/message",
    component: Message,
    meta: {
      title: "留言版",
    },
  },
];

export default routes;
