<template>
  <div>
    <div class="header">
      <a @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarrow-left"></use>
        </svg>
      </a>
      <h3>修改密码</h3>
    </div>
    <div class="set-content">
      <input :type="show?'password':'text'" placeholder="请输入新密码" class="inp" v-model="pass"  @blur="gitpass" @change="gitbtns">
      <div @click="open">
        <img src="../../../../../../public/assets/xue/p2.png" v-if="show">
        <img src="../../../../../../public/assets/xue/p1.png" v-else>
      </div> 
      <input type="text" placeholder="请输入手机号" class="inp" v-model="phone" @change="chameleon"> 
      <input type="text" placeholder="输入验证码" class="verification" v-model="yanzhenma">
      <div :class="chameleons?'btn-verification1':'btn-verification'" @click="catchTime" v-show="timimg">获取验证码</div>
      <div class="catchTime  Time" v-show="timimg==false">{{times}}s后重发</div>
      <button :class="gitbtn?'btn1':'btn'" @click="sub">确认修改</button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import Repwd from "../../../../../apis/User/Repwd";
export default {
  name:"changepassword",
  data(){
    return{
      code:false,
      show:true,
      yanzhenma:"",
      pass:"",
      pass1:false,
      times:60,
      timimg:true,
      phones:false,
      phone:"",
      chameleons:false,
      gitbtn:false  
    }
  },
  methods:{
    open(){
      this.show =! this.show
    },
    back(){
      this.times=60;
      this.timimg=true;
    },
      //获取验证码倒计时
    time(){
      let   timer=setInterval(()=> {
        this.times--;
        if(this.times<0){
          clearInterval(timer)
          this.times=60;
          this.timimg=true;
        }
      },1000);
    },
   async catchTime(){ //获取验证码
      let phoneReg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
      if(phoneReg.test(this.phone)){
        this.phones = true;
        this.timimg=false
        this.time()
        let a=await Repwd.getCode(this.phone)
        console.log(a)
        if(a.status==0){
         this.code=true
        }
      }else{
        Toast("手机号输入错误")
      }
    },
    gitpass(){ //密码验证
      let mmpass = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,12}$/ 
      if(mmpass.test(this.pass)){
        this.pass1 = true
      }else{
        Toast("密码至少包含两种字符")
      }
    },
    async sub(){
       if(this.pass1==true && this.phones==true && this.code==true && this.yanzhenma!=""){
         let a=await Repwd.getRepwd(this.pass1,this.phones,this.code)
         if(a.status==0){
           Toast("修改成功")
         }else{
           Toast("验证码输入有误")
         }
       }else{
         Toast("请输入正确信息")
       }
    },
    chameleon(){
      this.chameleons=true;
    },
    gitbtns(){
      this.gitbtn=true;
    } 
  }
}
</script>

<style scoped lang="scss">
     .header{
        width:100%;
        height:0.5rem;
        background-color: #0CCECE;
        font-size: 0;
        display: flex;
        svg{
            width: 0.3rem;
            height: 0.2rem;
            margin-top: 0.14rem;
            margin-left: 0.1rem;
        }
        h3{
            color: white;
            font-size: 0.18rem;
            margin-left: 1.1rem;
            margin-top: 0.15rem;
        }   
    }
    .set-content{
      margin-top: 0.4rem;
      position: relative;
      .inp{
        display:block;
        width: 2.8rem;
        height: 0.35rem;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0.1rem;
        border-radius: 0.5rem;
        border: 0.01rem solid #E6E6E6;
        padding-left: 0.2rem;
        outline: none;
      }
      .verification{
        width: 1.5rem;
        height: 0.35rem;
        border-radius: 0.5rem;
        border: 0.01rem solid #E6E6E6;
        padding-left: 0.2rem;
        margin-top: 0.1rem;
        margin-left: 0.37rem;
        outline: none;
      }
      .btn-verification{
         outline: none;
         width: 1rem;
         height: 0.35rem;
         border-radius: 0.5rem;
         margin-left: 0.1rem;
         border: none;
         color: white;
         background-color: #959595;
         display: inline-block;
         text-align: center;
         line-height: 0.35rem;
      }
      .btn-verification1{
         outline: none;
         width: 1rem;
         height: 0.35rem;
         border-radius: 0.5rem;
         margin-left: 0.1rem;
         border: none;
         color: white;
         background-color: #0CCECE;
         display: inline-block;
         text-align: center;
         line-height: 0.35rem;
      }
      .btn{
        border-radius: 0.5rem;
        display:block;
        width: 2.8rem;
        height: 0.35rem;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0.2rem;
        border: none;
        color: white;
        background-color: #959595;
        font-size: 0.16rem;
        outline: none;
      }
      .btn1{
        border-radius: 0.5rem;
        display:block;
        width: 2.8rem;
        height: 0.35rem;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0.2rem;
        border: none;
        color: white;
        background-color: #0CCECE;
        font-size: 0.16rem;
        outline: none;
      }
      img{
        width: 0.3rem;
        height: 0.3rem;
        position:absolute;
        top: 0.05rem;
        left: 2.8rem;
      }
      .img2{
        width: 0.3rem;
        height: 0.3rem;
        position:absolute;
        top: 0.55rem;
        left: 2.8rem;
      }
    }
    .catchTime{
       display: inline-block;
       margin-left: 0.1rem;
       color: #0CCECE;
    }
</style>