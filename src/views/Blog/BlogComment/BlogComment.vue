<template>
  <div class="blog-comment-container">
    <MessageArea
      title="评论详情"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea/index.vue";
import { getComments, postComment } from "@/api/blog.js";
import fetchData from "@/mixins/fetchData.js";
export default {
  mixins: [fetchData({})],
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  components: {
    MessageArea,
  },
  computed: {
    hasMore() {
      return this.data.rows.length <= this.data.total;
    },
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  methods: {
    //监听滚动，滚动到最底部的时候加载更多评论
    handleScroll(dom) {
      if (this.isLoading || !dom) {
        //正在加载中，则不执行
        return;
      }
      const range = 100; //规定一个范围，当在这个范围内都算作是到达了底部区间
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if (dec <= range) {
        this.fetchMore();
      }
    },
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },

    //加载下一页
    async fetchMore() {
      //没有更多数据就直接返回
      if (!this.hasMore) {
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },

    async handleSubmit(formData, callback) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("评论成功"); //告诉子组件，我这边处理完了，你那边继续吧
    },
  },
};
</script>

<style scoped lang="less">
.blog-comment-container {
  margin: 30px 0;
}
</style>