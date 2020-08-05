<template>
<div>
    <div class="recharge">
        <a @click="$router.back(-1)">
        <svg class="righter" aria-hidden="true">
            <use xlink:href="#iconarrow-left-copy"></use>
        </svg>
        </a>
        <span class="chong">充值</span>
    </div>
    <div class="content">
        <div class="content-one">
            <img :src=data.userimage alt="">
        </div>
        <div>
            <p>{{data.username}}</p>
            <p>{{data.userid}}</p>
        </div>
    </div>
    <div class="middle ">
        <p>充值金额</p>
    </div>
    <div class="next">
        <div class="nextt" @click="shu(i)" :class="{active:su === i}" v-for="(o,i) in list" :key="i">
            <div class="sol">
                <span>{{o.yuan}}元</span>
            </div>
            <div class="soll">
                <span>{{o.money}}万</span>
            </div>
        </div>
    </div>
    <div class="pro">
        <p>充值问题请联系微信:ytvipkf001</p>
        <p>充值即代表同意《悦兔充值协议》</p>
    </div>
    <div class="footer">
        <div>
            <div>
                <p>充值: <span class="yuan">{{num}}元</span> </p>
            </div>
            <div>
                <svg class="righter" aria-hidden="true">
                    <use xlink:href="#iconjinbi1"></use>
                </svg>
                <p class="jin">{{numb}}万金币</p>
            </div>
        </div>
        <div class="two" @click="click" >确认充值</div>
    </div>
</div>
</template>

<script>
    import { Dialog } from 'vant';
    import recharge from "../../apis/recharge/recharge"
    import { mapGetters } from 'vuex'
  export default {
    name: "Phone",
      data(){
        return{
            verShow:true,
            phone:null,
            code:null,
            inputcode:null,
            su:0,
            num:"10",
            numb:"100",
            list:[
                {yuan:"10",money:"100"},
                {yuan:"30",money:"300"},
                {yuan:"50",money:"500"},
                {yuan:"100",money:"1000"},
                {yuan:"500",money:"5000"},
                {yuan:"1000",money:"10000"},
                {yuan:"3000",money:"30000"},
                {yuan:"5000",money:"50000"},
                {yuan:"10000",money:"100000"}
            ]
        }
      },
      components:{
          [Dialog.name]:Dialog
      },
    computed:{
      ...mapGetters({
        data: 'GETDATA',
        token: 'GET_TOKEN'
      })
    },
      beforeMount(){
        this.$store.dispatch('INITDATA',this.token)  //给仓库触发事件
        },
      methods:{
          async click(){
            let res = await recharge.recharge(this.token,Number(this.num));
            if(res.static === 0){
                Dialog.alert({
                    message: '充值成功'
                    }).then(() => {
                })
            }else{
                Dialog.alert({
                    message: '充值失败'
                    }).then(() => {
                    // on close
                })
            }
          },
          shu(i){
              this.su = i;
              this.num = this.list[i].yuan
               this.numb = this.list[i].money
          }
      }
  }
</script>

<style lang="scss" scoped>
    .recharge{
        width: 100vw;
        height: 0.5rem;
        display: flex;
        align-items: center;
    }
    .righter{
        width: 0.25rem;
        height: 0.25rem;
    }
    .chong{
        font-size: 0.16rem;
        padding-left: 1.5rem;
        font-weight: bold;
    }
    .content{
        width: 100vw;
        height: 0.8rem;
        border-bottom: 0.01rem solid whitesmoke;
        display: flex;
    }
    .content-one{
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0.05rem;
    }
    .content-one img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .content p:nth-child(1){
        font-size: 0.16rem;
        margin-top: 0.15rem;
    }
    .content p:nth-child(2){
        font-size: 0.12rem;
        margin-top: 0.15rem;
    }
    .middle {
        width: 100vw;
        height: 0.5rem;
        border-bottom: 0.01rem solid whitesmoke;
    }
    .middle p{
        display: inline-block;
        width: 0.7rem;
        text-align: center;
        line-height: 0.2rem;
        margin-top: 0.4rem;
        margin-left: 1.5rem;
        height: 0.2rem;
        font-size: 0.14rem;
        color: gray;
        background-color: white;
    }
    .next{
        width: 3.75rem;
        height: 3.5rem;
        margin-top: 0.2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }
    .nextt{
        width: 1rem;
        height: 0.8rem;
        border-radius: 0.15rem;
        border: 0.01rem solid aqua;
    }
    .nextt.active{
        background-color: #36CDF8;
    }
    .sol{
        width: 0.8rem;
        height: 0.4rem;
        margin-left: 0.1rem;
        border-bottom: 0.01rem dashed aqua;
        text-align: center;
        line-height: 0.4rem;
    }
    .sol span{
        font-size: 0.14rem;
        color: black; 
    }
    .soll{
        width: 0.8rem;
        height: 0.4rem;
        margin-left: 0.1rem;
        text-align: center;
        line-height: 0.4rem;
    }
    .soll span{
        font-size: 0.14rem;
        color: aqua; 
    }
    .pro{
        width: 100vw;
        height: 0.5rem;
        text-align: center;
        line-height: 0.15rem;
    }
    .pro p{
        font-size: 0.1rem;
        color: gray;
    }
    .footer{
        width: 100vw;
        height: 0.5rem;
        margin-top: 0.15rem;
        display: flex;
        box-shadow: 0.07rem 0.07rem 0.07rem 0.07rem rgba(0,0,0,0.1)
    }
    .footer div:nth-child(1){
        width: 2.5rem;
        height: 0.5rem;
    }
    .footer div:nth-child(1) div:nth-child(1){
        width: 2.5rem;
        height: 0.25rem;
    }
    .footer div:nth-child(1) div:nth-child(1) p{
        margin-left: 0.1rem;
        font-size: 0.14rem;
        line-height: 0.25rem;
    }
    .yuan{
        color: red;
    }
    .footer div:nth-child(1) div:nth-child(2){
        width: 2.5rem;
        height: 0.25rem;
        margin-left: 0.1rem;
        display: flex;
    }
    .jin{
        font-size: 0.14rem;
        line-height: 0.25rem;
        color: gray;
    }
    .two{
        width: 1.15rem;
        height: 0.4rem;
        background-color: aquamarine;
        border-radius: 0.3rem;
        margin-top: 0.05rem;
        font-size: 0.16rem;
        color: white;
        text-align: center;
        line-height: 0.4rem;
    }
</style>