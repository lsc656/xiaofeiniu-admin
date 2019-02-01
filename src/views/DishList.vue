<template>
  <div class="xfn-dishList">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>菜品管理</el-breadcrumb-item>
      <el-breadcrumb-item>菜品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-tabs type="card">
      <el-tab-pane v-for="(c,i) in dishList" :key="c.cid">
        <span slot="label">
          <el-badge :value="c.dishList.length">{{c.cname}}</el-badge>
        </span>
        <el-row>
          <el-col v-for="(d,j) in c.dishList" :sm="12" :md="6" :lg="4" :xl="3" :key="d.did">
            <xfn-dish :data="d"></xfn-dish>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Dish from '../components/Dish.vue'
  export default {
    data(){
      return {
        dishList:[]
      }
    },
    methods:{

    },
    mounted(){
      var url = this.$store.state.globalSettings.apiUrl+"/admin/dish"
      this.$axios.get(url).then(({data})=>{
        this.dishList = data
      }).catch((err)=>{
        console.log(err)
      })
    },
    components:{
      'xfn-dish':Dish
    }
  }
</script>
<style lang="scss">
  
</style>