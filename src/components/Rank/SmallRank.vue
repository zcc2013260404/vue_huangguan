<template>
	<div class="Ra-SmallRank">
		<swiper :options="swiperOption1" ref="mySwiper1">
    <!-- slides -->
    <swiper-slide  class="s1"><pages v-if="data.day" :data="data.day" :num="num[0]" :tag="tag" /></swiper-slide>
    <swiper-slide  class="s1"><pages v-if="data.week" :data="data.week" :num="num[1]" :tag="tag"/></swiper-slide>
    <swiper-slide  class="s1"><pages v-if="data.month" :data="data.month" :num="num[2]" :tag="tag"/></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination swiper-pagination1"  slot="pagination"></div>
  </swiper>
	</div>
</template>

<script>
	import pages from './pages'
  export default {
    name: 'Star',
	components: {
		pages
	},
	props: ['data','tag'],
    data() {
      return {
		num:[{"n":1,"m":"万"},{"n":1,"m":"亿"},{"n":100,"m":"亿"}],
        swiperOption1: {
          // 所有的参数同 swiper 官方 api 参数
          // ...
			nested:true,  // 父子嵌套，子滑动完再滑动父
			touchReleaseOnEdges:true, // 滑动到边缘是释放滑动
			pagination: {
            el: '.swiper-pagination1',
						clickable :true,  // 分页器点击
						renderBullet: function (index, className) {
							let text;
							switch(index){
								case 0:text='日榜';break;
								case 1:text='周榜';break;
								case 2:text='月榜';break;
							}
							return '<span class="' + className + '">' + text + '</span>';
						},
						bulletClass : 'my-bullet1',//需设置.my-bullet样式
						bulletActiveClass: 'my-bullet-active1', //分页器内当前活动块的指示小点的类名。
          }
        }
      }
    },  
  }
</script>
<style lang="scss">
.Ra-SmallRank{
  overflow-x: hidden;
  width: 100vw;
  background: url(http://123.57.233.41:4000/images/bg.jpg);
	.swiper-pagination1{
		display: flex;
		padding: 0.05rem 0.15rem;
		margin: 0rem 0.1rem;
		box-sizing: border-box;
		width: 3.5rem !important;
		height: 0.4rem;
		justify-content: space-between;
		position: absolute;
		top: 0rem;
		background-color: rgba(#fff,0.4);
		border-radius: 0.19rem;
		.my-bullet1{
			font-size: 0.13rem;
			color: #f8f8f8;
			padding-left:0.15rem;
			display: flex;
			align-items: center;
			outline: none;
			letter-spacing: 0.15rem;
		}
	}
	.my-bullet-active1{
		color: #62ddca !important;
		background-color: #fff;
		border-radius: 0.18rem;
	}
	.s1{
		margin-top: 0.4rem;
	}
}

</style>