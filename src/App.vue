<template>
  <div
    id="app"
    class="app-container"
  >
    <Layout>
      <!-- 具名插槽 -->
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <!-- 路由 -->
      <template>
        <router-view></router-view>
      </template>
    </Layout>
    <ToTop />
  </div>

</template>

<script>
import Layout from "./components/Layout/index.vue";
import SiteAside from "./components/SiteAside/index.vue";
import ToTop from '@/components/ToTop/index.vue'
export default {
  components: {
    Layout,
    SiteAside,
    ToTop
  },
};
</script>


<style scoped lang="less">
@import "~@/styles/mixins.less";
.app-container {
  .self-fit(fixed);
}
.aside {
  width: 250px;
  height: 100%;
}
</style>


