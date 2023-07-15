import Home from "../views/Home";
import Blog from "../views/Blog";
import Project from "../views/Project";
import About from "../views/About";
import Message from "../views/Message";
import BlogDetail from '../views/Blog/Detail/Detail.vue'

const routes = [
    { name: "Home",path: "/home", component: Home},
    { name: "Blog",path: "/article", component: Blog },
    { name: "CategoryId",path: "/article/cate/:categoryId", component: Blog },
    { name: "BlogDetail",path: "/article/:id", component: BlogDetail },
    { name: "Project",path: "/project", component: Project },
    { name: "About",path: "/about", component: About },
    { name: "Message",path: "/message", component: Message },
  ]

export default routes