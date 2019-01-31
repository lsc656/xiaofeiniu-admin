<template>
  <div class="about">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>全局设置</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card shadow="never">
      <el-form :model="formData">
        <el-form-item label="应用名称：" label-width="130px">
          <el-input v-model="formData.appName"></el-input>
        </el-form-item>
        <el-form-item label="应用Api网址：" label-width="130px">
          <el-input v-model="formData.apiUrl"></el-input>
        </el-form-item>
        <el-form-item label="后台管理端网址：" label-width="130px">
          <el-input v-model="formData.adminUrl"></el-input>
        </el-form-item>
        <el-form-item label="客户端App网址：" label-width="130px">
          <el-input v-model="formData.appUrl"></el-input>
        </el-form-item>
        <el-form-item label="ICP备案号：" label-width="130px">
          <el-input v-model="formData.icp"></el-input>
        </el-form-item>
        <el-form-item label="版权声明：" label-width="130px">
          <el-input v-model="formData.copyright"></el-input>
        </el-form-item>
        <el-form-item label-width="130px">
          <el-button type="primary" @click="doSubmit">提交</el-button>
          <el-button @click="doCancel">取消</el-button>
        </el-form-item>
      </el-form>
      {{this.$store.state.globalSettings}}
    </el-card>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        formData:{}
      }
    },
    methods:{
      doSubmit(){
        this.$axios.put(this.$store.state.globalSettings.apiUrl+'/admin/settings',this.formData).then((res)=>{
          res = res.data
          if(res.code==200){
            this.$message.success('全局设置修改成功')
            var url = this.$store.state.globalSettings.apiUrl+"/admin/settings";
            this.$axios.get(url).then((res)=>{
              this.$store.commit('setGlobalSettings',res.data)
            }).catch((err)=>{
              console.log(err)
            })
          }else{
            this.$message.error('全局设置修改失败')
          }
        }).catch((err)=>{
          console.log(err)
        })
      },
      doCancel(){
        this.formData = {...this.$store.state.globalSettings}
      }
    },
    mounted(){
      //将$store存储中的全局配置数据复制给中间变量
      this.formData = {...this.$store.state.globalSettings}
    }
  }
</script>
<style lang="scss">
  
</style>