import Home from "../views/Home";
import Blog from "../views/Blog";
import Project from "../views/Project";
import About from "../views/About";
import Message from "../views/Message";

const routes = [
    { name: "Home",path: "/home", component: Home},
    { name: "Blog",path: "/article", component: Blog },
    { name: "CategoryId",path: "/article/cate/:categoryId", component: Blog },
    { name: "Project",path: "/project", component: Project },
    { name: "About",path: "/about", component: About },
    { name: "Message",path: "/message", component: Message },
  ]

export default routes