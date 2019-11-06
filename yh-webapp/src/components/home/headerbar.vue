<template>
<div>
  <img class="cd" src="../../../static/sy/cd.png" alt="">
  <img class="yh" src="../../../static/sy/yh.png" alt="">
  <img class="yhb" v-show="false" src="../../../static/sy/yhb.png" alt="">
  <img class="ss" src="../../../static/sy/ss.png" alt="">
</div>
</template>

<script>
    export default {
        name: "headerbar"
    }
</script>

<style scoped>
div{
  background-color: #333333;
}
  .cd{
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    margin: 0.1rem;
  }
  .yh{
    display: inline-block;
    width: 1.2rem;
    height: 0.38rem;
    margin: 0.08rem 0.1rem 0.04rem 0.7rem;
  }
  .ss{
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    margin: 0.01rem 0rem 0rem 0.64rem;
  }
</style>
