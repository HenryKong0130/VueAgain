<template>
  <div
    class="carousel-item-container"
    ref="container"
  >
    <div
      class="img-container"
      ref="image"
    >
      <ImageLoader
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
      />
    </div>
    <div
      class="title"
      ref="title"
    >{{ carousel.title }}</div>
    <div
      class="description"
      ref="desc"
    >{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader/index.vue";
export default {
  props: ["carousel"],
  components: { ImageLoader },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null,
      innerSize: null,
    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.showWords();

    // this.setSize();
    // window.addEventListener("resize", this.setSize);
  },
  // destroyed() {
  //   window.addEventListener("resize", this.setSize);
  // },
  // computed:{
  //   imagePosition(){
  //     return {
  //       left : "-20px",
  //       top: "-20px"
  //     }
  //   }
  // },
  methods: {
    showWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      //强制执行渲染
      this.$refs.title.clientHeight; //reflow
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      //强制执行渲染
      this.$refs.desc.clientHeight; //reflow
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    setSize() {
      this.containerSize = {
        width : this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight
      },
      this.innerSize = {
        width : this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight
      }
      console.log(this.containerSize,this.innerSize);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.carousel-item-container {
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
}
.img-container {
  width: 100%;
  height: 100%;
}

.title,
.description {
  position: absolute;
  left: 40px;
  letter-spacing: 4px;
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
}
.title {
  top: 40%;
  font-size: 2em;
  color: lighten(@dark, 65%);
}
.description {
  top: 48%;
  font-size: 1.2em;
  color: lighten(@dark, 35%);
}
</style>