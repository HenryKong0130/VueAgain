<template>
  <div
    class="blog-list-container"
    v-loading="isLoading"
    ref="container"
  >
    <ul>
      <li
        v-for="item in data.rows"
        :key="item.id"
      >
        <div
          class="thumb"
          v-if="item.thumb"
        >
          <RouterLink :to="{
            name:'BlogDetail',
            params:{
              id:item.id
            }
          }">
            <img
              v-lazy="item.thumb"
              :alt="item.title"
              :title="item.title"
            />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink :to="{
            name:'BlogDetail',
            params:{
              id:item.id
            }
          }">
            <h2>{{item.title}}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{ item.createDate }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论{{ item.commentNumber }}</span>
            <RouterLink :to="{
                name:'CategoryId',
                params:{
                  categoryId:item.category.id
                }
              }">{{ item.category.name }}</RouterLink>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页放到这里 -->
    <pager
      v-if="data.total"
      :current="this.routeInfo.page"
      :total="data.total"
      :limit="this.routeInfo.limit"
      :visibleNumber="10"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import pager from "@/components/Pager/index.vue";
import { getBlogs } from "@/api/blog.js";
import fetchData from "@/mixins/fetchData.js";
import mianScroll from "@/mixins/mainScroll.js";
export default {
  mixins: [fetchData({}),mianScroll("container")],
  components: {
    pager,
  },
  computed: {
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
  methods: {
    async fetchData() {
      return await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      );
    },
    handlePageChange(newPage) {
      console.log(newPage);
      //跳转到当前的分类id 当前的页容量 当前的newPage；有如下两种情况
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      if (this.routeInfo.categoryId === -1) {
        //http://localhost:8080/article?page=2&limit=10
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        //http://localhost:8080/article/cate/8?page=2&limit=10
        this.$router.push({
          name: "CategoryId",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
  },
  watch: {
    async $route() {
      this.isLoading = true;

      //滚动条高度设置为0
      this.$refs.container.scrollTop = 0;

      this.data = await this.fetchData();
      this.isLoading = false;
    },
  },
};
</script>


<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
