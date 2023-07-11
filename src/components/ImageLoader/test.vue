<template>
    <div
      id="app"
      class="test-container"
    >
      <!-- <h1>App组件</h1> -->
      <ImageLoader
        src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
        placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
        :duration="2000"
        @load="handleLoaded"
      />
    </div>
  </template>
  
  <script>
  import ImageLoader from "./index.vue";
  export default {
    components: {
      ImageLoader,
    },
    methods: {
      handleLoaded() {
        console.log("我收到了");
      },
    },
  };
  </script>
  
  
  <style scoped>
  .test-container {
    width: 500px;
    height: 400px;
    border: 2px solid;
    margin: 0 auto;
  }
  </style>
  
  
  