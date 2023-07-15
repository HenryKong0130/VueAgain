export default function (refValue) {
  return {
    mounted() {
      this.$bus.$on("setMainScroll", this.handleSetMainScroll);
      this.$refs[refValue].addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      //销毁的时候表示dom元素不存在了，不传此参数返回的就是undefined
      this.$bus.$emit("mainScroll"); 
      this.$bus.$off("setMainScroll", this.handleSetMainScroll);
      this.$refs[refValue].removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleSetMainScroll(top) {
        this.$refs[refValue].scrollTop = top;
      },
      handleScroll() {
        //向事件总线抛出一个事件名为「mainScroll」的事件，一旦发生了变化。监听它的人去执行一些列操作
        this.$bus.$emit("mainScroll", this.$refs[refValue]);
      },
    },
  };
}
