<template>
  <div class="about">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>菜品管理</el-breadcrumb-item>
      <el-breadcrumb-item>菜品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form label-width="100px" >
      <el-form-item label="菜品图片：">
        <el-upload
          :action="uploadAction" 
          :on-success="doUploadSucc"
          :showFileList="false"
          class="xfn-uploader" 
          name="dishImg">
          <img v-if="imgUrl" :src="imgUrl" alt="">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="主标题：">
        <el-input v-model="formData.title" placeholder="请输入菜品主标题"></el-input>
      </el-form-item>
      <el-form-item label="所属类别：">
        <el-radio-group v-model="formData.categoryId">
          <el-radio label="1" border>肉</el-radio>
          <el-radio label="2" border>海鲜河鲜</el-radio>
          <el-radio label="3" border>丸滑</el-radio>
          <el-radio label="4" border>蔬菜豆制品</el-radio>
          <el-radio label="5" border>菌菇</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="价格：">
        <el-input v-model="formData.price" placeholder="请输入菜品价格"></el-input>
      </el-form-item>
      <el-form-item label="菜品描述：">
        <el-input v-model="formData.detail" placeholder="请输入菜品描述" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="">
      
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        imgUrl:'', //要显示的预览图地址
        uploadAction:this.$store.state.globalSettings.apiUrl+'/admin/dish/image',  //可处理文件上传的数据API
        formData:{
          title:'',
          imgUrl:'',    //菜品图片在服务器上的文件名称
          price:'',
          detail:'',
          categoryId:'1'
        }
      }
    },
    methods:{
      doUploadSucc(res, file){
        //res 服务器端返回的相应消息
        console.log(res)
        //file：从input[type=file]中读取的第一个上传的文件对象。file.row 文件的原始数据
        console.log(file)
        //把上传的文件编码为DataURL字符串
        this.imgUrl = URL.createObjectURL(file.raw);
        this.formData.imgUrl = res.filaName;
      },
    },
  }
</script>
<style lang="scss">
  .xfn-uploader{
    .el-upload{
      border: 1px dashed #aaa;
      border-radius: 3px;
      cursor: pointer;
      width:250px;
      height:177px;
      overflow: hidden;
      position: relative;
   
      &:hover{
        border-color: #409EFF;
      }
    }
    
    img{
      max-width:100%;
    }
    
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
  }
</style>