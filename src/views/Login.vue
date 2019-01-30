<template>
  <div class="login">
    <el-card class="xfn-login-card">
      <div slot="header">管理员登录</div>
      <div>
        <el-form label-width="100px">
          <el-form-item label="管理员名：">
            <el-input v-model="formData.aname" placeholder="请输入管理员名"></el-input>
          </el-form-item>
          <el-form-item label="登录密码：">
            <el-input v-model="formData.apwd" type="password" placeholder="请输入管理员密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="doLogin">登录</el-button>
            <el-button @click="doCancel">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        formData:{
          aname:'',
          apwd:''
        }
      }
    },
    methods:{
      doLogin(){
        //执行登录
        var apiUrl = this.$store.state.globalSettings.apiUrl
        var url = apiUrl+"admin/login/"+this.formData.aname+"/"+this.formData.apwd
        this.$axios.get(url).then((res)=>{
          console.log(res)
        })
      },
      doCancel(){
        //清除用户输入
        this.formData.aname = ''
        this.formData.apwd = ''
      }
    }
  }
</script>
<style lang="scss">
  .xfn-login-card{
    width:400px;
    margin:100px auto;
    
    .el-card__header{
      text-align:center;
      font-size:1.2em;
    }
  }
</style>