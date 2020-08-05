<template>
      <swiper :options="swiperOption" ref="mySwiper" class="home-waiting-list">
      <swiper-slide :key="index" v-for="(item,index) in data" class="home-waiting-list-item">
        <span @click="goLiveRoom(item.studiono)">
          <span>
          <img class="bg" src="http://123.57.233.41:4000//images/bg-2.png" alt="">
          <img class="item-images" :src=item.userimage alt="已关注" >
        </span>
        </span>
        <p>{{item.username}}</p>
      </swiper-slide>
      </swiper>
</template>
<script>
  export default {
    name: "HomeWaitingList",
    props:["data","goLiveRoom"],
    data() {
      return {
        swiperOption: {
          touchReleaseOnEdges:true,
          slidesPerView : 5,
          slidesPerGroup : 5,
          freeMode : true,
          freeModeMinimumVelocity : 1,
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.home-waiting-list{
  .home-waiting-list-item{
    display: inline-block;
    text-align: center;
    font-size: 0.12rem!important;
    span{
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      padding:0.025rem;
      width: 0.6rem;
      height: 0.6rem;
      .bg{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
      .item-images{
        width: 0.55rem;
        height: 0.55rem;
      }
    }
    p{
      text-align: center;
      margin: 0.1rem 0;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }
}
</style>