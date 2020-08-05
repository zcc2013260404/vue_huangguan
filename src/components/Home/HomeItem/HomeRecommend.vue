<template>
  <div >
    <PullRefresh v-if="data" v-model="isLoading" @refresh="onRefresh">
      <HomeRecommendBanner :data="data.banner"></HomeRecommendBanner>
      <HomeList :data="data.specialrecommend" :goLiveRoom="goLiveRoom"></HomeList>
      <HomeRecommendAdvertisement></HomeRecommendAdvertisement>
      <HomeList :data="data.generalrecommend" :goLiveRoom="goLiveRoom"></HomeList>
    </PullRefresh>
    <loading v-else/>
  </div>
</template>

<script>
  import { PullRefresh } from 'vant';
  import HomeRecommendAdvertisement from "../HomeRecomend/HomeRecommendAdvertisement";
  import HomeRecommendBanner from "../HomeRecomend/HomeRecommendBanner";
  import HomeList from "./HomeList";
  import loading from "../../Commom/loading";
  export default {
    name: "HomeRecommend",
    props:["data","onRefreshR","goLiveRoom"],
    components:{
     HomeList,
      HomeRecommendBanner,
      HomeRecommendAdvertisement,
      PullRefresh,
      loading
    },
    data() {
      return {
        isLoading: false
      }
    },
    methods: {
      onRefresh() {
        this.onRefreshR();
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>