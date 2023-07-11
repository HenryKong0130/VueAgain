<template>
  <div id="app" class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template>
        <router-view></router-view>
      </template>

    </Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout/index.vue";
import SiteAside from './components/SiteAside/index.vue'
export default {
  components: {
    Layout,
    SiteAside
  },
};
</script>


<style scoped lang="less">
@import '~@/styles/mixins.less';
.app-container {
  .self-fit(fixed);
}
.aside{
  width: 250px;
  height: 100%;
}
</style>


