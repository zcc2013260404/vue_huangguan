<template>
  <div class="home-item-list">
    <swiper :options="swiperOption"
            ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="home-slide">
        <HomeAttention class="home-slide-item"
                       :dataAttentionLivingInfo="dataAttentionLivingInfo"
                       :dataReAttentionInfo="dataReAttentionInfo"
                       :change="change"
                       :getFollow="getFollow"
                       :onRefreshA="onRefreshA"
                       :goLiveRoom="goLiveRoom"
        />
      </swiper-slide>
      <swiper-slide class="home-slide">
        <HomeRecommend class="home-slide-item"
                       :data="dataRecommend"
                       :onRefreshR="onRefreshR"
                       :goLiveRoom="goLiveRoom"
        />
      </swiper-slide>
      <swiper-slide class="home-slide">
        <HomeNearBy class="home-slide-item"
                    :data="dataNear"
                    :onRefreshN="onRefreshN"
                    :goLiveRoom="goLiveRoom"
        />
      </swiper-slide>
      <swiper-slide class="home-slide">
        <HomeTalents class="home-slide-item"
                     :data="dataTalent"
                     :onRefreshT="onRefreshT"
                     :goLiveRoom="goLiveRoom"
        />
      </swiper-slide>
      <swiper-slide class="home-slide">
      <HomeChannel class="home-slide-item"
                    :data="dataCctv"
      />
    </swiper-slide>
      <div class="swiper-pagination home-swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import HomeChannel from "../HomeItem/HomeChannel";
import HomeRecommend from "../HomeItem/HomeRecommend";
import HomeAttention from "../HomeItem/HomeAttention";
import HomeNearBy from "../HomeItem/HomeNearBy";
import HomeTalents from "../HomeItem/HomeTalents";
export default {
  name: "HomeItem",
  props: [
    "data",
    "dataCctv",
    "dataAttentionLivingInfo",
    "dataTalent",
    "dataNear",
    "change",
    "dataRecommend",
    "dataReAttentionInfo",
    "getFollow",
    "onRefreshR",
    "onRefreshT",
    "onRefreshN",
    "onRefreshA",
     "getSlide",
    "goLiveRoom"
],
  components: {
    HomeNearBy,
    HomeAttention,
    HomeRecommend,
    HomeChannel,
    HomeTalents,
  },
  data () {
    let that = this;
    return {
      swiperOption: {
        loop: false,
        touchReleaseOnEdges: true,
        height: window.innerHeight,
        freeModeSticky: true,
        pagination: {
          el: '.home-swiper-pagination',
          clickable: true,  // 分页器点击
          // initialSlide: index,
          renderBullet: function (index, className) {
            let text;
            switch (index) {
              case 0:
                text = "关注";
                break;
              case 1:
                text = "推荐";
                break;
              case 2:
                text = "附近";
                break;
              case 3:
                text = "才艺";
                break;
              case 4:
                text = "频道";
                break;
            }
            return '<span class="' + className + '">' + text + '</span>';
          },
          bulletClass: 'home-bullet',//需设置.my-bullet样式
          bulletActiveClass: 'home-bullet-active', //分页器内当前活动块的指示小点的类名。
        },
        on:{
          slideChangeTransitionStart: function () {
            that.$store.dispatch('GET_SLIDE_INDEX',this.activeIndex);
            that.getSlide()
          }
        },
      }
    }
  }
}
</script>

<style lang="scss" >
.home-slide {
  margin-top: 0.5rem;
  height: 5.65rem !important;
  overflow: auto;
}
.swiper-slide {
  height: 1px;
}
.swiper-slide-active {
  height: auto;
}
.home-swiper-pagination {
  display: flex;
  padding: 0.15rem 0.5rem 0 0.5rem;
  box-sizing: border-box;
  height: 0.45rem;
  justify-content: space-between;
  position: fixed;
  top: 0;
  background: #fff;
  z-index: 1;
  .home-bullet {
    width: auto;
    height: 0.2rem;
    display: inline-block;
    color: #ccc;
    font-size: 0.14rem;
    outline: none;
  }
  .home-bullet-active {
    border-bottom: 0.02rem solid #10dbeb;
    color: #111;
    font-size: 0.16rem;
  }
}
</style>