<template>
  <div>
    <HomeCctvLive v-if="data" :data="data"/>
    <loading v-else/>
  </div>
</template>

<script>
  import { PullRefresh } from 'vant';
  import HomeCctvLive from "./HomeCctvLive";
  import loading from "../../Commom/loading";
  export default {
    name: "HomeChannel",
    props:["data"],
    components:{
      HomeCctvLive,
      PullRefresh,
      loading
    }
  }
</script>

<style lang="scss" scoped>

</style>