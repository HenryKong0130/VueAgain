<template>
  <div class="menu-container">
    <RouterLink
      v-for="item in items"
      :key="item.link"
      :to="{name:item.name}"
      :exact="item.exact"
      active-class="selected"
      exact-active-class=""
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{item.title}}</span>
    </RouterLink>
  </div>
</template>

<script>
import Icon from "@/components/Icon/index.vue";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "home",
          exact: false,
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
  // methods: {
  //   isSelected(item) {
  //     var link = item.link.toLowerCase();
  //     var currentPathname = location.pathname.toLowerCase();
  //     if (item.startWith) {
  //       return currentPathname.startsWith(link);
  //     } else {
  //       return currentPathname === link;
  //     }
  //   },
  // },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
  margin: 24px 0;
  a {
    &.selected {
      background: darken(@words, 3%);
    }
    &:hover {
      color: #fff;
    }
    display: flex;
    padding: 0 50px;
    align-items: center;
    height: 45px;
    .icon {
      width: 24px;
    }
  }
}
</style>