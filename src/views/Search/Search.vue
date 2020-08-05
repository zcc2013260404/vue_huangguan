<template>
 <div class="search-content">
   <div class="header">
     <router-link class="goback" to="/home">
       <svg class="icon" aria-hidden="true">
         <use class="icon1" xlink:href="#iconfanhui" ></use>
       </svg>
     </router-link>
     <div class="center">
       <input type="text" placeholder="用户昵称/ID" v-model="searchid" @input="searchInput">
       <a>
           <svg class="icon" aria-hidden="true" @click="del">
             <use xlink:href="#iconshanchu2"></use>
           </svg>
       </a>
     </div>
     <div class="search" @click="search">搜索</div>
   </div>
	 <div class="roll" v-if="show">
		<div class="intest">您可能感兴趣的用户</div>
		<user-item :data="data" :live="show" v-if="data" :sendFocus="sendFocus"></user-item>
	 </div>
   <div class="roll" v-else>
		<div class="intest" style="color: orange;">搜索结果</div>
		<user-item :data="searchdata" :live="show" v-if="searchdata" :sendFocus="sendFocus"></user-item>
   </div>
 </div>
</template>

<script>
  import SearchApi from "../../apis/Search/SearchApi";
  import Useritem from "../../components/Search/Useritem";
	import { Toast } from 'vant';
  import {mapGetters} from 'vuex'
  export default {
    name: "Search",
    data(){
      return{
          data:null,   // 感兴趣的用户信息
          searchid:null,   // 搜索的用户id
          searchdata:[],  // 搜索到的用户数据
			show:true,  // 控制感兴趣模块的显示隐藏
      }
    },
	computed: {
		...mapGetters({
			token:'GET_TOKEN',
		})
	},
    components:{
      [Useritem.name]:Useritem
    },
    beforeMount() {
		this.AllData();
    },
    methods:{
			async _getSearchdata(){
				this.searchdata = [];
				let a = await SearchApi.getSearchData(this.token,this.searchid)
				this.searchdata.push(a);  // 需要用push，不然刚开始是空的
				this.searchdata.forEach((item) =>{
					item.vipid = this.getVipClass(item.vipid)
				});
				console.log(this.searchdata)
			},
			search(){
				if(this.searchid == null){
					Toast('请输入搜索内容');
				}else{
					this.show = false;
					this._getSearchdata()	
				}
			},
			searchInput(){
				if(this.searchid == "" ){
					this.show = true;
				}
			},
		

		// 获取感兴趣的信息
			async AllData(){  
				let a=await SearchApi.getData(this.token)
				this.data=a.data.new;
				this.data.forEach((item) =>{
					item.vipid = this.getVipClass(item.vipid)
				});
			},
			// 关闭搜索信息
			del(){
				this.show = true;
				this.searchid = "";
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
			
			// 向后台提交此用户已关注
			async sendFocus(id){  
				console.log("后台提交关注"+id)
				let a = await SearchApi.focus(this.token,id)
				console.log(a)
				if(a.status == 0){
					let focus = null;
					// 更改感兴趣的关注
						this.data.forEach((item)=>{
							if(item.userid === id){
								item.focus = 1;
								item.user_follow_num++;
							}
						})
					// 更改搜索后的关注
						this.searchdata.forEach((item)=>{
							if(item.userid == id){
								item.focus = 1;
								item.user_follow_num++;
							}
						})
					
				}
			}
	 }
  }
</script>

<style lang="scss" scoped>
.header{
  display: flex;
	width: 3.75rem;
  height: .5rem;
  overflow: hidden;
	position: fixed;
	top: 0rem;
	background-color: #fff;
	z-index: 2;
  .goback svg{
      width: .2rem;
      height: .2rem;
      fill:#a0a0a0;
      margin-top: .15rem;
      /*margin-top: .1rem;*/

    }
    >a{
      display: block;
      width: .4rem;
      text-align: center;

    }
   >.center{
     width: 2.8rem;
     line-height: .5rem;
     overflow: hidden;
     position: relative;
     input{
       font-size: .16rem;
       width: 2.2rem;
       padding-left: .2rem;
        border: none;
       outline: none;
       &::-webkit-input-placeholder{
         color: #9e9e9e;

       }
     }
     svg{
       width: .2rem;
       height: .2rem;
       fill:#9d9d9d;
       position: absolute;
       top:.14rem;
       /*margin-top: .1rem;*/
     }
   }
  .search{
    height: .24rem;
    line-height: .24rem;
    padding: 0rem .1rem;
    border:.02rem solid #d1a93a;
    margin-top: .1rem;
    border-radius: .15rem;
    color: #d1a93a;
  }

}
.intest{
  padding-left: .2rem;
  font-size: .16rem;
  border-bottom: .01rem solid #f3f3f3;
  padding-bottom: .1rem;
}
.roll{
	margin-top: 0.5rem;
}
</style>