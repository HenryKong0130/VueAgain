<template>
    <Layout>
      <BlogList />
      <template #right>
        <BlogCategory />
      </template>
    </Layout>
</template>

<script>
import Layout from "@/components/Layout/index.vue";
import BlogCategory from "./BlogCategory/BlogCategory.vue";
import BlogList from "./BlogList/BlogList.vue";
export default {
  components: {
    Layout,
    BlogCategory,
    BlogList
  },
};
</script>

<style lang="less" scoped>
</style>
