<template>
  <div class="main">
    <el-container>
      <!-- 左侧导航菜单 -->
      <el-aside width="200px">左侧导航菜单</el-aside>
      <el-container>
        <!-- 顶部信息栏 -->
        <el-header height="60px">顶部信息栏</el-header>
        <!-- 主体部分 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  export default {
    beforeCreate(){
      //组件创建之前先要检查是否已经登录为管理员
      if(!this.$store.state.adminName){
        this.$router.push('/login')
      }
    }
  }
</script>
<style lang="scss">
  
</style>
