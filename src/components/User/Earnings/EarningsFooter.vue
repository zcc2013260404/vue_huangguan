<template>
  <div class="footer">
    <van-action-sheet v-model="show" title="兑换金币" v-if="show">
        <div class="money" v-for="(o,i) in data.earnings.conversion" :key="i">
            <div>
                <svg class="money-s" aria-hidden="true">
                    <use xlink:href="#iconjinbi1"></use>
                </svg>
            </div>
            <div>
                <p>使用 <span class="wan">{{o.integral}}</span> 积分</p>
                <p>兑换 <span class="qian">{{o.gold}}</span> 金币</p>
            </div>
            <div>
                兑换金币
            </div>
        </div>
    </van-action-sheet>
    <button @click="gg" class="btn">
        <svg class="righter" aria-hidden="true">
            <use xlink:href="#iconjinbi"></use>
        </svg>
        兑换金币
    </button>

    <van-action-sheet v-model="shower" title="提现"  v-if="shower" class="withdraw">
        <input type="text" placeholder="请输入您需要提现的金额">
        <button>确定</button>
    </van-action-sheet>
    <button class="btnn" @click="hh">
        <svg class="righterr" aria-hidden="true">
            <use xlink:href="#icontixian"></use>
        </svg>
        提现
    </button>
  </div>
</template>

<script>
import { ActionSheet } from 'vant';
import {mapGetters} from "vuex"
export default {
    name:"EarningsFooter",
    components:{
        [ActionSheet.name]:ActionSheet
    },
    methods:{
        gg(){
            this.show =! this.show 
        },
        hh(){
            this.shower =! this.shower 
        }
    },
    data(){
        return {
            show:false,
            shower:false
        }
    },
    computed: {
		...mapGetters({
			data: 'GETDATA',
		})
	},
    beforeMount(){
        this.$store.dispatch('INITDATA')  //给仓库触发事件
    }
}
</script>

<style lang="scss" scoped>
    .footer{
        width: 100vw;
        height: 1.2rem;
        margin-top: 0.45rem;
        margin-top: 1rem;
    }
    .van-popup--bottom.van-popup--round{
        height:3rem;
    }
    .btn{
        width: 3.35rem;
        height: 0.5rem;
        border: none;
        outline: none;
        background-color: #0FE3ED;
        padding-left: 1rem;
        padding-right: 0.8rem;
        border-radius: 0.35rem;
        margin-left: 0.2rem;
        font-size: 0.18rem;
        color: white;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .btnn{
        width: 3.35rem;
        height: 0.5rem;
        border: none;
        font-size: 0.18rem;
        color: white;
        outline: none;
        background-color: #FBA33F;
        padding-left: 0.9rem;
        padding-right: 0.9rem;
        border-radius: 0.35rem;
        margin-left: 0.2rem;
        margin-top: 0.2rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .righter{
        width: 0.3rem;
        height: 0.3rem;
    }
    .righterr{
        width: 0.3rem;
        height: 0.3rem;
    }
    .money{
        width: 3.35rem;
        margin-left: 0.2rem;
        height: 0.5rem;
        display: flex;
    }
    .money div:nth-child(1){
        width: 0.5rem;
        height: 0.5rem;
        font-size: 0;
    }
    .money-s{
        width: 0.3rem;
        height: 0.3rem;
        margin-left: 0.1rem;
        margin-top: 0.1rem;
    }
    .money div:nth-child(2){
        width: 1.5rem;
        height: 0.5rem;
        font-size: 0.14rem;
        text-align: center;
        line-height: 0.25rem;
    }
    .wan{
        color: #0FE3ED;
    }
    .qian{
        color: #FBA33F;
    }
    .money div:nth-child(3){
        width: 0.9rem;
        height: 0.25rem;
        border-radius: 0.3rem;
        border: 0.02rem solid #FBA33F;
        text-align: center;
        font-size: 0.14rem;
        color: #FBA33F;
        line-height: 0.25rem;
        margin-left: auto;
        margin-top: 0.1rem;
        margin-bottom: 0.1rem;
    }
    .withdraw{
        width: 100vw;
    }
    .withdraw input{
        width: 3rem;
        margin-left: auto;
        margin-right: auto;
        height: 0.25rem;
        display: block;
        font-size: 0.12rem;
        border-radius: 0.15rem;
        border: 0.01rem solid gainsboro;
        padding-left: 0.2rem;
        margin-top: 0.5rem;
        margin-bottom: 0.2rem;
    }
    .withdraw button{
        width: 2rem;
        margin-left: auto;
        margin-right: auto;
        height: 0.3rem;
        border: none;
        outline: none;
        border-radius: 0.15rem;
        background-color: #FBA33F;
        color: white;
        font-size: 0.16rem;
        display: block;
    }
</style>