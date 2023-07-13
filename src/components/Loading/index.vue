<template>
  <img
    :src="loadingURl"
    alt=""
    class="loading-container"
  >
</template> 

<script>
import loadingURl from "@/assets/loading.svg";
export default {
  data() {
    return {
      loadingURl,
    };
  },
};
</script>

<style scoped lang="less">
@import '~@/styles/mixins.less';
.loading-container{
    self-center()
}

</style>