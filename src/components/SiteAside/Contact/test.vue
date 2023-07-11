<template>
    <div id="app" class="test-container">
      <Contact />
    </div>
  </template>
  
  <script>
  import Contact from './index.vue'
  export default {
    components: {
      Contact
    },
  };
  </script>
  
  
  <style scoped>
  .test-container {
    width: 400px;
    height: 400px;
    border: 2px solid red;
    margin: 0 auto;
    padding-top: 200px;
    background: #000;
  
  }
  </style>
  