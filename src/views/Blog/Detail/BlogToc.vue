<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList
      :list="tocWithSelect"
      @select="handleSelect"
    />
  </div>

</template>

<script>
import RightList from "@/views/Blog/RightList/index.vue";
export default {
  props: {
    toc: {
      type: Array,
    },
  },
  data() {
    return {
      activeAnchor: "", //当前选中的标题
    };
  },
  components: {
    RightList,
  },
  computed: {
    tocWithSelect() {
      const getTOC = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: this.activeAnchor === t.anchor,
          children: getTOC(t.children),
        }));
      };
      return getTOC(this.toc);
    },
    //得到所有具有anchor属性的元素，并将其形成一个doms数组
    doms() {
      const doms = [];

      const addToDoms = (toc) => {
        for (const t of toc) {
          console.log(t.anchor);
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length > 0) {
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    //设置activeAnchor为正确的值
    setSelect(scrollDom) {
      if (!scrollDom) {
        return;
      }
      this.activeAnchor = ""; //由于后续要重新设置，所以需要先清空
      const range = 200;
      for (const dom of this.doms) {
        //判断这个dom元素是否被选中
        if (!dom) {
          continue;
        }
        const top = dom.getBoundingClientRect().top;

        if (top > 0 && top <= range) {
          //在规定的范围内
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          //在规定的范围下方
          return;
        } else {
          //在规定的范围下方
          this.activeAnchor = dom.id; //先假设自己是激活的，继续看后面
        }
      }
    },
  },
  created() {
    this.$bus.$on("mainScroll", this.setSelect);
  },
};
</script>

<style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>