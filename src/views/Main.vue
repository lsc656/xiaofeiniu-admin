<template>
  <div class="about">
    <h1>This is an main page</h1>
    <div>左侧导航菜单</div>
    <div>上方提示栏</div>
    <div>
      <h3>右下角主体部分</h3>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
  }
</script>
<style lang="scss">
  
</style>
