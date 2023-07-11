<template>
  <div class="site-aside-container">
    <Avatar url="http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c"/>
    <span class="name">妖娆的小胖子</span>
    <Menu />
    <Contact />
  </div>
</template>

<script>
import Avatar from "@/components/Avatar/index.vue";
import Contact from "./Contact/index.vue";
import Menu from "./Menu/index.vue";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
};
</script>

<style scoped lang="less">
@import '~@/styles/var.less';
.site-aside-container{
    width: 106%;
    height: 100%;
    background: @dark;
    padding: 20px 0;
    overflow-x: hidden;
    overflow-y: scroll;
    box-sizing: border-box;
    .name{
        color: #fff;
        display: block;
        text-align: center;
        margin-top: 5px;
    }
}
.avatar-container{
    margin: 0 auto;
}
</style>