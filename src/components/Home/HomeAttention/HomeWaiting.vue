<template>
  <div class="waiting">
    <div v-if="data.length !==0">
      <p>-你关注的主播有 <span style="color: red">{{data.length}}</span> 位正在开播，快前往观看吧-</p>
      <HomeWaitingList class="follow" :data="data" :goLiveRoom="goLiveRoom"></HomeWaitingList>
    </div>
    <div class="Unconcerned" v-else>
      <p>-你关注的主播还未开播-</p>
      <p><img src="http://123.57.233.41:4000//images/waiting.jpg" alt=""></p>
    </div>
  </div>
</template>
<script>
  import HomeWaitingList from "./HomeWaitingList";
  export default {
    name: "HomeWaiting",
    props:["data","goLiveRoom"],
    components:{
      HomeWaitingList
    },
  }
</script>

<style lang="scss" scoped>
.waiting{
  border-bottom: 0.02rem solid #eee;
  margin-bottom: 0.1rem;
  p{
    text-align: center;
    padding-bottom: 0.05rem;
  }
  .Unconcerned{
    width: 100%;
    img{
      width: 100%;
    }
  }
  .follow{
    margin: 0.1rem;
  }
}
</style>