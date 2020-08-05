<template>
  <div class="n-heade">
    <a @click="$router.back(-1)">
    <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconarrow-left"></use>
    </svg>
    </a>
    <h5>特权介绍</h5>
    <div class="popups">
        <button @click="ff" class="btn">立即充值</button>
        <van-action-sheet v-model="show" title="特权详细介绍" v-if="show">
            <p>红V--开通金额:100元,同时获得500万金币,永久获得</p>
            <p>紫V--开通金额:300元,同时获得2000万金币,永久获得</p>
            <p>银冠--开通金额:3000元,同时获得3亿金币,时间:30天</p>
            <p>皇冠--开通金额:10000元,同时获得10亿金币,时间:30天</p>
            <p>钻冠--开通金额:30000元,同时获得30亿金币,时间:30天</p>
            <p>至尊--开通金额:100000元,同时获得100亿金币,时间:30天</p>
            <button class="btn1" @click="ss">立即开通</button>
        </van-action-sheet>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import { ActionSheet } from 'vant';
import { Dialog } from 'vant';
import Nobility from "../../../apis/Nobility"
export default {
    name:"NHeader",
     data(){
        return{
            show:false,
            backmsg:""
        }
    },
    components:{
      [ActionSheet.name]:ActionSheet,
      [Dialog.name]:Dialog
    },
    computed: {
		...mapGetters({
            vip: 'GETVIP',
            token:'GET_TOKEN'
		})
	},
    methods:{
        ff(){
            this.show =! this.show
        },
        ss(){
            this.show = false;
            Dialog.confirm({
                title: '充值',
                message: '是否确定开通'
            }).then(async () => {
                console.log(this.vip)
               let a = await Nobility.getvip(this.token,this.vip);
               this.backmsg = a.msg;
               Dialog.alert({
                message: this.backmsg
                }).then(() => {
                // on close
                });             
            }).catch(() => {
            // on cancel
            });
        }
    }
}
</script>

<style scoped lang="scss">
    .n-heade{
        width: 100%;
          height: 0.5rem;
          display: flex;
          background: url(http://123.57.233.41:4000/images/top.png);
          background-repeat: no-repeat;
          background-size: cover;
        svg{
            width: 0.3rem;
            height: 0.2rem;
            margin-top: 0.15rem;
            margin-left: 0.1rem;
        }
        h5{
            color: white;
            font-size: 0.18rem;
            margin-left: 0.2rem;
            margin-top: 0.17rem;
            font-weight: 500;
        }   
    }
    .van-popup--bottom.van-popup--round {
        height: 3rem;
    }
    .btn{
        width: 0.8rem;
        height: 0.25rem;
        border: none;
        background: none;
        color: white;
        font-size: 0.14rem;
        line-height: 0.5rem;
        margin-left: 1.4rem;
    }
    .popups{
        p{
            padding-left: 0.1rem;
            font-size: 0.13rem;
            margin: 0.1rem;
            padding: 0.05rem;
        }
        .btn1{
            width: 2.3rem;
            height: 0.4rem;
            color: white;
            font-weight: 700;
            border-radius: 0.7rem;
            border: none;
            background-color: aqua;
             margin-left: 0.75rem;
            font-size: 0.15rem;

        }
    }

</style>