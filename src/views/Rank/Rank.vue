<template>
	<div class="Ra-con">
		<router-link to="/home">
			<svg class="icon"
				aria-hidden="true">
			<use xlink:href="#iconfanhuitubiao"></use>
			</svg>
		</router-link>
		<swiper :data="data" v-if="data" :loading="data.length"></swiper>
		<router-view></router-view>
	</div>	
</template>
<script>
import BigRank from './BigRank'
import RankApi from '../../apis/Rank/RankApi.js'
export default {
  name: "Rank",
  components: {
    "swiper": BigRank,
  },
	data(){
		return {
			data: [],
		}
	},
	beforeMount() {
		this.getRankData();
	},
	methods:{
		async getRankData(){
			let a = await RankApi.getRankData();
			this.data = a;
			this.data.forEach((bang) =>{
				bang.day.forEach((day)=>{
					day.vipclass = this.getVipClass(day.vipclass)
				})
				bang.week.forEach((day)=>{
					day.vipclass = this.getVipClass(day.vipclass)
				})
				bang.month.forEach((day)=>{
					day.vipclass = this.getVipClass(day.vipclass)
				})
			});
		},
		//转换等级
		getVipClass(vipClass){
			switch (vipClass) {
				case 1:
					return "#iconvip";
					break;
				case 2:
					return "#iconvip7";
					break;
				case 3:
					return "#iconvip8";
					break;
				case 4:
					return "#iconvip9";
					break;
				case 5:
					return "#iconvip10";
					break;
				case 6:
					return "#iconzhizunhuiyuan";
					break;
			}
		},
		
	}
}
</script>

<style scoped lang="scss">
.Ra-con {
  background: url(http://123.57.233.41:4000/images/bg.jpg);
  background-size: 100%;
  overflow-x: hidden;
  width: 100vw;
  svg {
    width: 0.2rem;
    height: 0.2rem;
    fill: white;
    position: absolute;
    top: 0.17rem;
    left: 0.1rem;
    z-index: 999;
  }
}
</style>