<template>
  <div class="bottombar">
    <router-link to="/home">首页</router-link>
    <router-link to="/classify">分类</router-link>
    <router-link to="/stroll">逛</router-link>
    <router-link to="/shopcar">购物车</router-link>
    <router-link to="/my">我的</router-link>
  </div>
</template>

<script>
    export default {
        name: "footbar"
    }
</script>

<style scoped>
  a{
    font-size:0.16rem;
    flex: 1;
    text-align: center;
  }
  .bottombar{
    width: 100%;
    position: fixed;
    bottom:0px;
    display: flex;
    flex-direction: row;
  }
</style>
