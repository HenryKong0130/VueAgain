<template>
    <div
      id="app"
      class="test-container"
    >
      <Layout>
        <template #left>
          <div class="left">左边栏</div>
        </template>
        <template #main>
          <div class="main">中间</div>
        </template>
        <template #right>
          <div class="right">右边栏</div>
        </template>
      </Layout>
    </div>
  </template>
  
  <script>
  import Layout from "./index.vue";
  export default {
    components: {
      Layout,
    },
  };
  </script>
  
  
  <style scoped>
  .test-container {
    width: 80%;
    height: 600px;
    border: 2px solid;
    white-space: nowrap;
  }
  .left {
    width: 300px;
    height: 100%;
    background: #008c8c;
  }
  .main {
    width: 100%;
    height: 100%;
    background: red;
  }
  .right {
    width: 200px;
    height: 100%;
    background: yellow;
  }
  </style>
  
  
  