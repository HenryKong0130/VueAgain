<template>
  <ul class="right-list-container">
    <li
      v-for="(item,i) in list"
      :key="i"
    >
      <span
        :class="{active:item.isSelect}"
        @click="handleSelect(item)"
      >{{ item.name }}</span>
      <span
        v-if="item.aside"
        class="aside"
        :class="{active:item.isSelect}"
        @click="handleSelect(item)"
      >
        {{ item.aside }}
      </span>
      <!-- 显示当前组件 -->
      <RightList
        :list="item.children"
        @select="handleSelect"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleSelect(item) {
      if (!item.isSelect) {
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.right-list-container {
  list-style: none;
  padding: 0;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    font-size: 14px;
    cursor: pointer;
    .active {
      color: #dc6a12;
      font-weight: bold;
    }
  }
}
.aside {
  font-size: 12px;
  margin-left: 1em;
  color: @gray;
}
</style>>