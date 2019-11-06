<template>
    <div>
      <headerbar></headerbar>
      <hswiper></hswiper>
      <all-classify></all-classify>
      <footbar></footbar>
    </div>
</template>

<script>
  import footbar from "../components/footerbar/footbar";
  import headerbar from "../components/home/headerbar";
  import hswiper from "../components/home/hswiper";
  import allClassify from "../components/home/allClassify";
    export default {
        name: "home",
        components:{
            footbar,
            headerbar,
            hswiper,
            allClassify
        }
    }
</script>

<style scoped>
p{
  color: aquamarine;
}
</style>
