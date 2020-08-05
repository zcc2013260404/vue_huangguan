<template>
  <div>
    <PullRefresh v-if="data" v-model="isLoading" @refresh="onRefresh">
      <HomeList :data="data" :goLiveRoom="goLiveRoom"></HomeList>
    </PullRefresh>
    <loading v-else/>
  </div>
</template>

<script>
  import { PullRefresh } from 'vant';
  import HomeList from "./HomeList";
  import loading from "../../Commom/loading";
  export default {
    name: "HomeNearBy",
    props:["data","onRefreshN","goLiveRoom"],
    components:{
      HomeList,
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
        this.onRefreshN();
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>