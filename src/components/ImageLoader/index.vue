<template>
  <div class="image-loader-container">
    <img
      v-if="!everythingDone"
      :src="placeholder"
      class="placeholder"
    >
    <img
      :src="src"
      class="origin"
      @load="handleLoaded"
      :style="{opacity:originOpacity,transition:`${duration}ms`}"
    >
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      originLoaded: false, //原图的状态，加载完成后变为 True 
      everythingDone: false, //全部加载完成
    };
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    handleLoaded() {
      this.originLoaded = 'True';
      setTimeout(() => {
        this.everythingDone = 'True'
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixins.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fit();
    object-fit: cover;
  }
  .placeholder {
    filter: blur(2vw);
  }
}
</style>