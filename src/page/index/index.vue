<template>
  <div class="layout">
    <div class="menu">
        <Menu></Menu>
    </div>
    <div class="content">
        <Content></Content>
    </div>
  </div>
</template>

<script>
import Menu from '@/layout/menu';
import Content from '@/layout/content';
export default {
    name:'Index',
    components:{
        Menu,
        Content,
    }
}
</script>

<style lang="less" scoped>
.layout{
    display: flex;
    height: 100vh;
    .menu{
        // width: 200px;
        background-color: #112f50 ;
        
    }
    .content{
        flex: 1;
    }
}
</style>
