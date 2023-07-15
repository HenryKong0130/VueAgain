<template>
  <Layout>
    <div
      class="main-container"
      ref="mainContainer"
      v-loading="isLoading"
    >
      <BlogDetail
        :blog="data"
        v-if="data"
      />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div
        class="right-container"
        v-loading="isLoading"
      >
        <BlogToc
          :toc="data.toc"
          v-if="data"
        />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout/index.vue";
import BlogDetail from "./BlogDetail.vue";
import BlogToc from "./BlogToc.vue";
import BlogComment from "@/views/Blog/BlogComment/BlogComment.vue";
import mainScroll from "@/mixins/mainScroll";
export default {
  mixins: [fetchData({}),mainScroll("mainContainer")],
  components: {
    Layout,
    BlogDetail,
    BlogToc,
    BlogComment,
  },
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id);
    },
  },
  updated() {
    this.hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = this.hash;
    }, 100);
  },
};
</script>

<style scoped lang="less">
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>