<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide :key="index" v-for="(item,index) in data"><a href="#"><img :src=item.img alt="banner"></a></swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendBanner",
    props:["data"],
    data() {
      return {
        swiperOption: {
          autoplay:true,
          loop: true,
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.swiper-slide{
  img{
    width: 100vw;
    height: 1.3rem;
  }
}
</style>