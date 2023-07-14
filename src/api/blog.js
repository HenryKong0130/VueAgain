import request from "./request.js";

//获取所有博客分类
export async function getBlogCategories() {
    return await request.get("/api/blogtype");
  }

//分页获取博客
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
  return await request.get("/api/blog", {
    params: {
      page,
      limit,
      categoryid,
    },
  });
}


//获取单个博客
export async function getBlogById(id) {
  return await request.get("/api/blog/:id", {
    params: {
      id,
    },
  });
}

