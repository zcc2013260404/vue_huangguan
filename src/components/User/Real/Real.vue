<template>
    <div class="realer">
        <div class="top">
            <a @click="$router.go(-1)">
                <svg class="righterr" aria-hidden="true">
                    <use xlink:href="#iconfanhui"></use>
                </svg>
            </a>
            <p class="real">实名认证</p>
        </div>
        <div class="enter">
            <p class="enters">提交成功后，开始认证</p>
        </div>
        <div class="name">
            <div>
                <p>真实姓名</p>
            </div>
            <div>
                <input type="text" placeholder="请输入真实姓名" v-model="name" @blur="getname">           
            </div>
        </div>
        <div class="identity">
            <div>
                <p>身份证号</p>
            </div>
            <div>
                <input type="text" placeholder="请输入身份证号" v-model="identity" @blur="getidentity"  >
            </div>
        </div>
        <div class="phone">
            <div>
                <p>手机号码</p>
            </div>
            <div>
                <input type="text" placeholder="请输入手机号码" v-model="phone" @blur="getphone" @change="changeCss">
            </div>
        </div>
        <div class="apply" @click="getclick" :class="isNullInput?'no-apply':'null-apply'" >
            申请认证
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    name:"Real",
    data(){
        return{
            verShow:false,
            vershoww:false,
            vershowww:false,
            name:"",
            identity:"",
            phone:"",
            isNullInput:false
        }
    },
    methods:{
        getname(){
            let real = /^[\u4e00-\u9fa5]{2,4}$/;
            if(real.test(this.name)){
                this.vershow = true;
            }else{
                Toast('请输入正确姓名');
            }
        },
        getidentity(){
            let realid = /^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
            if( realid.test(this.identity)) {
                this.vershoww = true;
            } else {
                Toast('请输入正确身份证');
            }
        },
        getphone(){
           let realphone = /^1(3|5|8)\d{9}$/;
            if( realphone.test(this.phone)) {
                this.vershowww = true;
            } else {
                Toast('请输入正确手机号码');
            } 
        },
        getclick(){
            if(this.vershow === true && this.vershoww === true && this.vershowww === true){
                fetch("http://39.98.126.184:8080/api/name/test",{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json;charset=UTF-8"
                    },
                    body: JSON.stringify({
                        realname:this.name,
                        paper:this.identity,
                        telphone:this.phone
                    })
                }).then(res=>{
                    res.json().then(data=>{
                        if(data.status===1){
                            // console.log(data)
                            window.location.href="/home"
                        }else {
                            // console.log("失败")
                        }
                    })
                })
            }else{
                Toast("你个憨憨，这点小问题都能填错")
            }
        },
        changeCss() {
            if(this.vershow === true){
                this.isNullInput = true;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .realer{
        width: 100vw;
        height: 6.66rem;
        background-color: white;
    }
    .top{
        width: 100vw;
        height: 0.5rem;
        border-bottom: 0.01rem solid whitesmoke;
    }
    .righterr{
        width: 0.25rem;
        height: 0.25rem;
        position: absolute;
        top: 0.15rem;
        left: 0.2rem;
    }
    .real{
        font-size: 0.16rem;
        text-align: center;
        line-height: 0.5rem;
    }
    .enter{
        width: 100vw;
        height: 0.4rem;
    }
    .enters{
        font-size: 0.13rem;
        margin-left: 0.2rem;
        color: grey;
        padding-top: 0.15rem;
    }
    .name{
        width: 100vw;
        height: 0.4rem;
        display: flex;
    }
    .identity{
        width: 100vw;
        height: 0.4rem;
        display: flex;
    }
    .phone{
        width: 100vw;
        height: 0.4rem;
        display: flex;
        border-bottom: 0.01rem solid whitesmoke;
    }
    .name div:nth-child(1){
        width: 1rem;
        height: 0.4rem;
    }
    .name div:nth-child(1) p{
        font-size: 0.16rem;
        text-align: center;
        line-height: 0.4rem;
    }
    .name div:nth-child(2){
        width: 2.75rem;
        height: 0.4rem;
    }
    .name div:nth-child(2) input{
        width: 2.75rem;
        height: 0.39rem;
        border: none;
        outline: none;
        font-size: 0.16rem;
    }
    .identity div:nth-child(1){
        width: 1rem;
        height: 0.4rem;
    }
    .identity div:nth-child(1) p{
        font-size: 0.16rem;
        text-align: center;
        line-height: 0.4rem;
    }
    .identity div:nth-child(2){
        width: 2.75rem;
        height: 0.4rem;
        
    }
    .identity div:nth-child(2) input{
        width: 2.75rem;
        height: 0.39rem;
        border: none;
        outline: none;
        font-size: 0.16rem;
    }
    .phone div:nth-child(1){
        width: 1rem;
        height: 0.4rem;
    }
    .phone div:nth-child(1) p{
        font-size: 0.16rem;
        text-align: center;
        line-height: 0.4rem;
    }
    .phone div:nth-child(2){
        width: 2.75rem;
        height: 0.4rem;
    }
    .phone div:nth-child(2) input{
        width: 2.75rem;
        height: 0.39rem;
        border: none;
        outline: none;
        font-size: 0.16rem;
        border-bottom: 0.01rem solid whitesmoke;
    }
    .null-apply{
        font-size: 0.16rem;
        border-radius: 0.3rem;
        width: 3rem;
        height: 0.5rem;
        background-color: #E8E8E8;
        color: gray;
        margin-top: 0.4rem;
        margin-left: 0.4rem;
        text-align: center;
        line-height: 0.5rem;
    } 
    .no-apply{ 
        font-size: 0.16rem;
        border-radius: 0.3rem;
        width: 3rem;
        height: 0.5rem;
        background-color: aqua;
        color: white;
        font-weight: bold;
        margin-top: 0.4rem;
        margin-left: 0.4rem;
        text-align: center;
        line-height: 0.5rem;
    }
</style>