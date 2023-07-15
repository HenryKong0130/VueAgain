<template>
  <div class="message-area-container">
    <DataForm v-on="this.$listeners"/>
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <!-- 继续将父组件BlogComment的list数据向子组件传递 -->
    <DataList :list="list" />
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from "./DataForm";
import DataList from "./DataList";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    DataForm,
    DataList,
  },
};
</script>

<style scoped lang="less">
.loading {
  position: relative;
  height: 100px;
}
</style>
