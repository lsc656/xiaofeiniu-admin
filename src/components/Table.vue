<template>
  <div class="xfn-table-info">
    <el-card shadow="hover">
      <div class="xfn-table" :style="{'background-color': getTableColor(tableInfo.status)}">
        {{tableInfo.tid}}号桌，{{tableInfo.status|tableStatus}}
      </div>
      <el-button type="success" plain size="mini" @click="showTableDetail">详情</el-button>
      <el-button type="danger" plain size="mini">修改</el-button>
    </el-card>
    <!-- 桌台详情对话框 -->
    <el-dialog :title="tableInfo.tid+'号桌台详情'" :visible='dialogTableDetailVisible' :before-close="closeDialogTableDetail">
      <!-- 对话框主体 -->
      <el-tabs type="border-card" @tab-click="makeQRCode">
        <el-tab-pane label="桌台状态">桌台状态加载中...</el-tab-pane>
        <el-tab-pane label="桌台二维码">
          <img :src="qrcodeData"></img>
        </el-tab-pane>
      </el-tabs>
      <!-- 对话框尾部 -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableDetailVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogTableDetailVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        dialogTableDetailVisible:false,
        qrcodeData:''
      }
    },
    methods:{
      getTableColor(status){
        if( status == 1) return '#67C23A'
        else if( status ==2 ) return '#E6A23C'
        else if( status == 3 ) return '#F56C6C'
        else return '#909399'
      },
      showTableDetail(){
        this.dialogTableDetailVisible = true
        
      },
      closeDialogTableDetail(){
        this.dialogTableDetailVisible = false
      },
      makeQRCode(){
        //注意：此方法不能在当前组件的mounted中调用。原因：canvas在el-dialog中，el-dialog在组件加载时没有在DOM树上，找不到canvas
        var qrcode = require('qrcode')
        var tableUrl = this.$store.state.globalSettings.appUrl + '/#/' +this.tableInfo.tid
        //把绘制得到的图片二进制数据转换为字符编码
        qrcode.toDataURL(tableUrl,{width:300,errorCorrectionLevel:'H'},(err,url)=>{
          this.qrcodeData = url
        })
      }
    },
    props:['tableInfo']
  }
</script>
<style lang="scss">
  $table-height:120px;

  .xfn-table-info{ 
    padding:3px;
    text-align:center;

    .xfn-table{
      width:90%;
      height:$table-height;
      line-height:$table-height;
      margin:5px auto;
      border:1px solid #aaa;
      border-radius:50%;
      box-shadow:3px 4px 5px #bccbbc;
    }
  }
</style>