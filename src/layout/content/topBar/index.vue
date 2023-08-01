<template>
  <div class="top-bar">
      <div class="btn">
        <span class="el-icon-s-fold"  @click="foldClick" v-if="isfold"></span>
        <span class="el-icon-s-unfold"   @click="foldClick" v-else></span>
      </div>
  </div>
</template>

<script>
export default {
    name:'TopBar',
    data() {
      return {
        isfold:true,
      }
    },
    methods:{
      foldClick(){
        this.$bus.$emit('isFold',this.isfold)
        this.isfold = !this.isfold
      }
    }
}
</script>

<style lang="less" scoped>
  .btn{
    
    color: #fff;
    span{
      line-height: 50px;
      font-size: 25px; 
  }
  }
</style>