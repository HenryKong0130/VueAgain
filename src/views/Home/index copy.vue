<template>
  <div
    class="home-container"
    ref="container"
  >
    <h1 class="test"></h1>
    <span ref="number">{{ count }}</span>
    <button @click="count++">++</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: ["1"],
      count: 0,
    };
  },
  beforeCreate() {
    console.log("beforeCreate", this.banners);
  },
  created() {
    console.log("created", this.banners);
  },
  beforeMount() {
    console.log("beforeMount", document.getElementsByClassName("test"));
  },
  mounted() {
    console.log("mounted", this.$refs.container);
  },
  beforeUpdate() {
    console.log("beforeUpdate", this.$refs.number.innerText, this.count);
  },
  updated() {
    console.log("updated", this.$refs.number.innerText, this.count);
  },
  beforeDestroy(){
    console.log('beforeDestory','正在被销毁');
  },
  destroyed(){
    console.log('destoryed','已经被销毁');
  }
};
</script>
