<template>
  <div
    class="home-container"
    ref="container"
    @wheel="handleWheel"
    v-loading="loading"
  >
    <ul
      class="carousel-container"
      :style="{marginTop}"
      @transitionend="handleTransitionend"
    >
      <li
        v-for="item in data"
        :key="item.id"
      >
        <CarouselItem :carousel="item" />
      </li>
    </ul>
    <div
      class="icon icon-up"
      v-show="index >= 1"
      @click="switchTo(index-1)"
    >
      <Icon type="arrowUp"></Icon>
    </div>
    <div
      class="icon icon-down"
      v-show="index < data.length-1"
      @click="switchTo(index+1)"
    >
      <Icon type="arrowDown"></Icon>
    </div>
    <ul class="indicator">
      <li
        v-for="(item,i) in data"
        :key="item.id"
        :class="{active: i === index}"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import CarouselItem from "./Carouselitem.vue";
import Icon from "@/components/Icon/index.vue";
// import { getBanners } from "@/api/banner";
// import fetchData from "@/mixins/fetchData.js";
import { mapState } from "vuex";
export default {
  // mixins: [fetchData([])],
  components: {
    Icon,
    CarouselItem,
  },
  data() {
    return {
      index: 0, //第几个轮播图
      containerHeight: 0, //容器的高度
      switching: false, //是否正在滚动
    };
  },
  created() {
    this.$store.dispatch("banner/fetchBanner");
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner", ["loading", "data"]),
  },
  methods: {
    // async fetchData() {
    //   return await getBanners();
    // },
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      if (this.switching) {
        return;
      }
      if (e.deltaY < -100 && this.index > 0) {
        this.switching = true;
        this.index--;
      } else if (e.deltaY > 100 && this.index < this.data.length - 1) {
        this.switching = true;
        this.index++;
      }
    },
    handleTransitionend() {
      this.switching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixins.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  //测试
  // width: 400px;height: 300px;
  // overflow: visible;
  // border: 2px solid #008c8c;
  // margin:100px auto;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}

.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;
  li {
    height: 100%;
  }
}
.icon {
  .self-center();
  font-size: 36px;
  transform: translateX(-50%);
  color: @gray;
  cursor: pointer;
  @gap: 30px;
  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }
}
.indicator {
  .self-center();
  transform: translateY(-50%);
  left: auto;
  right: 20px;
  li {
    width: 7px;
    height: 7px;
    background: @words;
    box-sizing: border-box;
    border-radius: 50%;
    border: 1px solid #fff;
    cursor: pointer;
    margin-top: 4px;
    &.active {
      background: #fff;
    }
  }
}

@jump: 5px;
@keyframes jump-up {
  0% {
    transform: translate(-50%, @jump);
  }
  50% {
    transform: translate(-50%, -@jump);
  }
  1000% {
    transform: translate(-50%, @jump);
  }
}
@keyframes jump-down {
  0% {
    transform: translate(-50%, -@jump);
  }
  50% {
    transform: translate(-50%, @jump);
  }
  1000% {
    transform: translate(-50%, -@jump);
  }
}
</style>