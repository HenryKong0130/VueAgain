<template>
  <div class="site-aside-container">
    <template v-if="data">
      <Avatar url="http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c" />
    <span v-if="data" class="name">{{ data.siteTitle }}</span>
    </template>
    <Menu />
    <Contact v-if="data"/>
    <p
      v-if="data"
      class="footer"
    >{{ data.icp }}</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar/index.vue";
import Contact from "./Contact/index.vue";
import Menu from "./Menu/index.vue";
import { mapState } from "vuex";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container {
  width: 106%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  overflow-x: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
  .name {
    color: #fff;
    display: block;
    text-align: center;
    margin-top: 5px;
  }
}
.avatar-container {
  margin: 0 auto;
}
</style>