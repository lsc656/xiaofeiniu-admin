<template>
  <div class="xfn-table-info">
    <el-card shadow="hover">
      <div class="xfn-table" :style="{'background-color':tableInfo.status==1?'#67C23A':tableInfo.status==2?'#E6A23C':tableInfo.status==3?'#F56C6C':'#909399'}">
        {{tableInfo.tid}}号桌，{{tableInfo.status|tableStatus}}
      </div>
      <div class="xfn-table-button">
        <el-button type="success" plain size="mini">详情</el-button>
        <el-button type="danger" plain size="mini">修改</el-button>
      </div>
    </el-card>
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    props:['tableInfo']
  }
</script>
<style lang="scss">
  $table-height:80px;
  .xfn-table-info{ 
    .xfn-table{
    height:$table-height;
    width:100%;
    border-radius:50%;
    text-align:center;
    line-height:$table-height;
    }
    .xfn-table-button{
      text-align:center;
    }
  }
</style>