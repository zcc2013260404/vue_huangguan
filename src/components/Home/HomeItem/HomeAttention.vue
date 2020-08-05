<template>
  <div>
    <PullRefresh v-if="dataAttentionLivingInfo" v-model="isLoading" @refresh="onRefresh">
        <HomeWaiting v-if="dataAttentionLivingInfo"
                     :data="dataAttentionLivingInfo"
                     :goLiveRoom="goLiveRoom">
        </HomeWaiting>
        <HomeAttentionList v-if="dataReAttentionInfo"
                           :data="dataReAttentionInfo"
                           :change="change"
                           :getFollow="getFollow"
                           :goLiveRoom="goLiveRoom">
        </HomeAttentionList>
    </PullRefresh>
    <loading v-else/>
  </div>
</template>

<script>
  import { PullRefresh } from 'vant';
  import HomeAttentionList from "../HomeAttention/HomeAttentionList";
  import HomeWaiting from "../HomeAttention/HomeWaiting";
  import loading from "../../Commom/loading";
  export default {
    name: "HomeAttention",
    props:[
        "dataReAttentionInfo",
        "change",
        "dataAttentionLivingInfo",
        "getFollow",
        "onRefreshA",
        "goLiveRoom"
    ],
    components:{
      HomeAttentionList,
      HomeWaiting,
      PullRefresh,
      loading
    },
    data() {
      return {
        isLoading: false,
      }
    },
    methods: {
      onRefresh() {
        this.onRefreshA();
        setTimeout(() => {
          this.isLoading = false;
        },500);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>