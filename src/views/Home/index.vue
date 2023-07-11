<template>
  <div
    class="home-container"
    ref="container"
  >
    <h1>{{ banners.length }}</h1>
  </div>
</template>

<script>
import { getBanners } from "@/api/banner";
export default {
  data() {
    return {
      banners: [],
    };
  },
  async created() {
    this.banners = await getBanners();
  },
};
</script>
