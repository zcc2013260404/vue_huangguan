<template>
  <div>
    <HomeAttentionListHeader :change="change"/>
    <HomeRecommendList :data="data" :getFollow="getFollow" :goLiveRoom="goLiveRoom"/>
  </div>
</template>

<script>
  import HomeRecommendList from "./HomeRecommendList";
  import HomeAttentionListHeader from "./HomeWatchedListHeader";
  export default {
    name: "HomeAttentionList",
    props:["data","change","getFollow","goLiveRoom"],
    components:{
      HomeAttentionListHeader,
      HomeRecommendList
    }
  }
</script>

<style lang="scss" scoped>

</style>