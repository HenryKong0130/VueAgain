<template>
    <div id="app">
      <Pager :current="current" :total="total" @pageChange="handlePageChange($event)"/>
    </div>
  </template>
  <script>
  import Pager from './index.vue'
  export default {
    name: "App", //如果组件没有在注册的时候指定名字，则使用改名字
    components: {
      Pager,
    },
    data(){
      return {
        current:5,
        limit:10,
        total:300
      }
    },
    methods:{
      handlePageChange(newPage){
        this.current = newPage;
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  
  
  