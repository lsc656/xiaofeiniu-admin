<template>
  <div>
    {{data.title}}
    <img :src="require('../assets/img/dish/'+data.imgUrl)" style="max-width:100%;">
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    props:['data']
  }
</script>
<style lang="scss">
  
</style>