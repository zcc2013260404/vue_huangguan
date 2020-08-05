<template>
    <div>
        <div class="center">
            <div> <input type="text" :placeholder="content" v-model="sa" ></div>
            <div  @click="add">搜索</div>

        </div>
        <div class="bottom">{{tip}}</div>
    </div>
</template>
<script>
   import { Dialog } from 'vant';
    export default {
        name: "Detail",
        props:["content","tip"],
        data(){
           return{
               sa:null,
               show:false
           }

        },
        components:{
           [Dialog.name]: Dialog,
        },
        methods:{
            add(){
                if(this.sa==null){
                    Dialog.alert({
                        message: '搜索的ID不能为空'
                    }).then(() => {
                        // on close
                    });
                }

            }
        }
    }
</script>

<style lang="scss" scoped>
    .center{
        padding: .15rem;
        margin: -.01rem auto 0;
        height: .4rem;
        background-color: black;
        display: flex;
    >div:first-child{
        width: 2.5rem;
        height: .28rem;
        background-color: white;
        border-radius: .3rem;
    input{
        margin-top: .02rem;
        border: none;
        width: 2rem;
        font-size: .14rem;
        margin-left: .2rem;
    }
    }
    >div:nth-child(2){
        color: white;
        line-height: .24rem;
        width: .75rem;
        height: .28rem;
        text-align: center;
        border: .02rem solid #dbbc7c;
        font-size: .16rem;
        border-radius: .3rem;
        margin-left: .1rem;
        color: #d4b57a;
    }
    }
    .bottom{
        background-color: black;
        color: white;
        margin-top: -.01rem;
        text-align: center;
        padding-bottom: .15rem;
    }
</style>