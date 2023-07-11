<template>
  <img
    class="avatar-container"
    :src="url"
    :style="{width:size + 'px',height:size + 'px'}"
  >
</template>

<script>
export default {
  props: {
    url: {
      type: String, //url属性必须是一个字符串
      required: true, //表示属性必须传递
    },
    size: {
      type: Number,
      default:150
    },
  },
};
</script>

<style scoped>
/* 带有作用域的样式 */
.avatar-container {
  object-fit: cover;
  border-radius: 50%;
  display: block;
}
</style>