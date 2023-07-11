<template>
    <div
      id="app"
      class="test-container"
    >
      <Menu />
    </div>
  </template>
  
  <script>
  import Menu from "./components/Menu/index.vue";
  export default {
    components: {
      Menu,
    },
  };
  </script>
  
  
  <style scoped>
  .test-container {
    width: 400px;
    height: 400px;
    margin: 0 auto;
    background: #000;
  }
  </style>
  
  
  