<template>
  <div class="content">
    <div class="top-bar">
      <top-bar></top-bar>
    </div>
    <div class="page-view">
      <page-view></page-view>
    </div>
  </div>
</template>

<script>
import TopBar from './topBar';
import PageView from './pageView';
export default {
    name:'Content',
    components:{
      'top-bar':TopBar,
      'page-view':PageView,
    }
}
</script>

<style lang="less" scoped>
.content{
  .top-bar{
    line-height: 50px;
    height: 50px;
    background-color: #1e78bf;
  }
}
</style>

