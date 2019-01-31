<template>
  <div class="xfn-category-list">
  <el-breadcrumb>
    <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
    <el-breadcrumb-item>菜品类别管理</el-breadcrumb-item>
    <el-breadcrumb-item>类别列表</el-breadcrumb-item>
  </el-breadcrumb>
  <el-button size="small" plain type="primary" @click="addCategory"><i class="el-icon-plus"></i>添加新的菜品类别</el-button>
  <el-table border :data="categoryList" stripe>
    <el-table-column label="编号" prop="cid"></el-table-column>
    <el-table-column label="名称" prop="cname"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="{row,$index}">
        <el-button size="mini" type="success" plain @click="updateCategory(row,$index)">修改</el-button>
        <el-button size="mini" type="danger" plain @click="deleteCategory(row,$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        categoryList:[]
      }
    },
    methods:{
      updateCategory(c,i){
        this.$prompt('请输入菜品类别','修改菜品类别',{inputValue:c.cname}).then(({value})=>{
          this.$axios.put(this.$store.state.globalSettings.apiUrl+'/admin/category',{cid:c.cid,cname:value}).then((res)=>{
            this.categoryList[i].cname = value
          }).catch((err)=>{
            console.log(err)
          })
        }).catch(()=>{})
      },
      deleteCategory(c,i){
        this.$confirm('删除操作无法撤销！确认吗？','删除确认',{
          type: 'warning'
        }).then(()=>{
          this.$axios.delete(this.$store.state.globalSettings.apiUrl+'/admin/category/'+c.cid).then((res)=>{
            if(res.data.code == 200){
              this.categoryList.splice(i,1);
              this.$message.success('菜品类别删除成功')
            }else{
              this.$message.error('类别删除出差错：'+res.data.msg)
            }
          }).catch((err)=>{
            console.log(err)
          })
        }).catch(()=>{})
      },
      addCategory(){
        this.$prompt('请输入新的菜品类别名：','提示').then(({value})=>{
          var url = this.$store.state.globalSettings.apiUrl+'/admin/category';
          this.$axios.post(url,{cname:value}).then((res)=>{
            res = res.data
            if(res.code == 200){
              this.$message.success('新的类别添加成功')
              this.categoryList.push({cid:res.cid,cname:value})
            }else{
              this.$message.error('新的类别添加过程出错，'+res.msg)
            }
          }).catch((err)=>{})
        }).catch((err)=>{

        })
      }
    },
    mounted(){
      var url = this.$store.state.globalSettings.apiUrl+'/admin/category';
      this.$axios.get(url).then((res)=>{
        this.categoryList = res.data
      }).catch((err)=>{
        console.log(err)
      })
    }
  }
</script>
<style lang="scss">
  
</style>