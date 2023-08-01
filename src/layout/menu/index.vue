<template>
  <div class="menu" >
    <el-menu
      router
      :collapse="isCollapse"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#112f50"
      text-color="#fff"
      active-text-color="#fff">
      <el-menu-item >
        <span slot="title">生鲜采购系统</span>
      </el-menu-item>
      <el-menu-item index="/index" >
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="/product">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>产品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/product/list">产品列表</el-menu-item>
          <el-menu-item index="/product/category">产品分类</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/order">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/order/list">订单列表</el-menu-item>
          <el-menu-item index="/order/collect">订单汇总</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/advert">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>广告管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/advert/list">广告分类</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
      
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
    name:'Menu',
    data() {
      return {
        isCollapse:false,
      }
    },
    mounted() {
      this.$bus.$on('isFold',(fold)=>{
        this.isCollapse = fold;
        console.log(fold);
      })
    },
}
</script>

<style lang="less" scoped>
  .el-menu{
    border-right: 0; 
    .is-active{
      background-color: #1e78bf !important;
    }
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
</style>