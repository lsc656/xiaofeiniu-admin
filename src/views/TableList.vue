<template>
  <div class="xfn-table-list">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>桌台管理</el-breadcrumb-item>
      <el-breadcrumb-item>桌台列表</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <el-row>
      <el-col :xs="12" :sm="8" :md="6" :lg="4" :xl="2" v-for="(table,index) in tableList" :key="index">
        <xfn-table :tableInfo="table"></xfn-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import Table from '../components/Table.vue'
  export default {
    data(){
      return {
        tableList:[]
      }
    },
    mounted(){
      var url = this.$store.state.globalSettings.apiUrl+"/admin/table"
      this.$axios.get(url).then(({data})=>{
        this.tableList = data
      }).catch((err)=>{
        console.log(err)
      })
    },
    components:{
      'xfn-table':Table
    }
  }
</script>
<style lang="scss">
  
</style>