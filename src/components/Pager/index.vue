<template>
  <!-- 只有总页数大于1才显示 -->
  <div
    class="pager-container"
    v-if="current>0"
  >
    <a
      @click="handleClick(1)"
      :class="{disabled : current === 1}"
    >|&lt;&lt;</a>
    <a
      @click="handleClick(current - 1)"
      :class="{disabled : current === 1}"
    >&lt;&lt;</a>
    <a
      v-for="(n,i) in numbers"
      @click="handleClick(n)"
      :key="i"
      :class="{active: current === n}"
    >{{ n }}</a>
    <a
      @click="handleClick(current + 1)"
      :class="{disabled : current === pageNumber}"
    >&gt;&gt;</a>
    <a
      @click="handleClick(pageNumber)"
      :class="{disabled : current === pageNumber}"
    >&gt;&gt;|</a>
  </div>
</template> 

<style scoped lang="less">
@import "~@/styles/var.less";

.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    color: @primary;
    margin: 0 6px;
    cursor: pointer;
    &.disabled {
      cursor: not-allowed;
      color: @lightWords;
    }
    &.active {
      color: @words;
      cursor: text;
      font-weight: bold;
    }
  }
}
</style>

<script>
export default {
  props: {
    current: {
      type: Number,
      required: false,
      default: 1,
    },
    total: {
      type: Number,
      required: false,
      default: 0,
    },
    limit: {
      type: Number,
      required: false,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      required: false,
      default: 10,
    },
  },
  computed: {
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    numbers() {
      let nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    },
    nn() {
      return [1, 2, 3];
    },
  },
  methods: {
    handleClick(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage === this.current) {
        return;
      }
      this.$emit("pageChange", newPage);
    },
  },
};
</script>


