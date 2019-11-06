<template>
  <swipe class="my-swipe">
<!--    <img src="../../../static/sy/ts1.jpg" alt="">-->
    <swipe-item class="slide1"></swipe-item>
    <swipe-item class="slide2"></swipe-item>
    <swipe-item class="slide3"></swipe-item>
    <swipe-item class="slide4"></swipe-item>
    <swipe-item class="slide5"></swipe-item>
    <swipe-item class="slide6"></swipe-item>
    <swipe-item class="slide7"></swipe-item>
    <swipe-item class="slide8"></swipe-item>
  </swipe>
</template>

<script>
    export default {
        name: "hswiper"
    }
</script>

<style scoped>
  .my-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }

  .slide1 {
    color: #fff;
    background-image: url("../../../static/sy/ts1.jpg");
    background-size: 100% 100%;
  }

  .slide2 {
    background-image: url("../../../static/sy/ts2.jpg");
    background-size: 100% 100%;
  }

  .slide3 {
    background-image: url("../../../static/sy/ts3.jpg");
    background-size: 100% 100%;
  }
  .slide4 {
    background-image: url("../../../static/sy/ts4.jpg");
    background-size: 100% 100%;
  }
  .slide5 {
     background-image: url("../../../static/sy/ts5.jpg");
     background-size: 100% 100%;
   }
  .slide6 {
    background-image: url("../../../static/sy/ts6.jpg");
    background-size: 100% 100%;
  }
  .slide7 {
    background-image: url("../../../static/sy/ts7.jpg");
    background-size: 100% 100%;
  }
  .slide8 {
    background-image: url("../../../static/sy/ts8.jpg");
    background-size: 100% 100%;
  }
</style>
