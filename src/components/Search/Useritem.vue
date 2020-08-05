<template>
    <div class="user-list" v-if="data">
        <div class="user-item" v-for="(n,i) in data">
            <div class="left"  @click="goDetail(n.userid)">
                <img :src="n.userimage">
            </div>
            <div class="center"  @click="goLive(n.live,n.userid)">
                <div class="top">
                    <span class="title">{{n.username}}</span>
                    <i v-if="live && n.vipid" class="nolive">
                        <svg class="icon" aria-hidden="true">
                            <use :xlink:href="n.vipid"></use>
                        </svg>
                    VIP</i>
					<i v-if="!live" class="liveSearch">
						<b :class="n.islive!=0 ? 'red':'gray'">LIVE</b>
					    <svg class="icon" aria-hidden="true">
					        <use :xlink:href="n.vipid"></use>
					    </svg>
					</i>
                </div>
                <div class="bottom">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#iconguanzhuxuanzhong"></use>
                    </svg>
                    <span>{{n.user_follow_num}}</span>
                </div>
            </div>
            <div class="right" >
				<svg class="icon focus" aria-hidden="true" v-if="n.focus!==0" @click="goDetail(n.userid)">
					<use xlink:href="#iconjiantou"></use>		    
				</svg>
				<svg class="icon nofocus" aria-hidden="true" @click="sendFocus(n.userid)" v-else>
				    <use xlink:href="#iconguanzhu"></use>
				</svg>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "UserItem",
        props:["data","live","sendFocus"],
		methods:{
			goDetail(id){
				this.$router.push("/user/fans/?userid="+id);
			},
			goLive(i,id){  // 判断是否有正在直播的字段
				if(i){
					this.$router.push("/live/?userid="+id);
				}else{
					this.$router.push("/user/fans/?userid="+id);
				}
			}
		}
    }
</script>

<style lang="scss" scoped>
.user-item{
    height: .75rem;
    display: flex;
	justify-content: space-around;
    padding-right: 0.1rem;
    .left{
        img{
            width: .5rem;
            height: .5rem;
            margin: .1rem;
            border-radius: 50%;
        }
    }
    .right{
        svg.focus{
            width: 0.3rem;
			height: 0.2rem;
			margin-top: 0rem;
			fill: #999;
			padding: 0.2rem 0.13rem;
        }
		svg.nofocus{
			width:.2rem;
			height: .2rem;
			margin-top: .2rem;
			padding: 0.05rem 0.18rem;
			background: linear-gradient(to right,#48f5f3,#03ceca);
			border-radius: 0.2rem;	
		}
    }
    .center{
        width: 2.2rem;
        .top{
            margin-top: .1rem;
            display: flex;
			align-items: center;
            .title{
                font-size: .16rem;
                display: block;
                max-width: 1rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .nolive{
                display: block;
                height: .17rem;
                line-height: .17rem;
                background: linear-gradient(to right,#48f5f3,#03ceca);
                border-radius: .1rem;
                color: white;
                font-size: .12rem;
                margin-left: .1rem;
                padding:0rem 0.07rem 0rem .24rem;
                position: relative;
                box-sizing: border-box;
				font-style: italic;
				svg{
				    width: .18rem;
				    height: .18rem;
				    position: absolute;
				    left: .05rem;
				}
            }
			.liveSearch{
				display: inline-block;
				position: relative;
				b{
					width: 0.3rem;
					margin: 0rem 0.1rem;
					padding: 0.02rem 0.05rem;
					font-size: 0.13rem;
					letter-spacing: 0.01rem;
					color: #fff;
					position: absolute;
					top: -0.08rem;
				}
				svg{
				    width: .18rem;
				    height: .18rem;
				    position: absolute;
				    top: -0.08rem;
					left: 0.6rem;
					
				}
				.red{
					background-color: red;
				}
				.gray{
					background-color: #ddd;
				}
			}
			
            img{
                width: .2rem;
                height: .2rem;
                margin-left: .05rem;
            }

        }
        .bottom{
            display: flex;
            line-height: .3rem;
			align-items: center;
			margin-top: 0.08rem;
            svg{
                width: .2rem;
                height: .2rem;
				margin-right: 0.03rem;
				vertical-align: middle;
            }
            span{
                color: #8e8e8e;
            }
        }
    }
}
</style>