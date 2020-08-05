<template>
    <div class="usershow-content">
        <div class="usershow-img">
            <img :src="data.userimage">
        </div>
        <div class="usershow-top">
            <div>
                {{data.username}}
                <svg class="icon" aria-hidden="true">
                    <use  xlink:href="#iconnv1" ></use>
                </svg>
                <span>
                    <svg class="icon" aria-hidden="true">
                       <use  :xlink:href="icon" ></use>
                    </svg>
                </span>
            </div>
            <p>ID:{{data.userid}}
                <svg class="icon" aria-hidden="true">
                    <use  xlink:href="#icondingwei2" ></use>
                </svg>
                <span>西安</span>
            </p>
            <i>加油努力干</i>
        </div>
        <div class="usershow-center">
            <a>
                <i>123</i>
                <span >关注</span>

            </a>
            <a>
                <i>35</i>
                <span>粉丝</span>
            </a>
        </div>
        <div class="usershow-bottom">
            <span @click="add()"v-if="data.focus">+关注</span>
            <span v-else class="areadyfocus">已关注</span>
            <span>@TA</span>
            <span>悄悄话</span>
            <span>送礼</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserVant",
        props:["data","icon"],
        methods:{
            add(){
             //fetch请求数据
            }
        }
    }
</script>

<style lang="scss" scoped>
    .usershow-img{
        text-align: center;
    img{
        width: .5rem;
        height: .5rem;
        border-radius: 50%;
        margin-top: .1rem;
    }
    }
    .usershow-top{
    div{
        display: flex;
        justify-content: center;
        align-items:center ;
        font-size: .14rem;
        margin-top: .05rem;
    svg{
        width: .2rem;
        height: .2rem;
        margin: 0rem .05rem;
    }
    }
    p{
        display: flex;
        justify-content: center;
        align-items:center ;
        color: #a600ff;
        margin: .05rem 0rem;
    svg{
        width: .15rem;
        height: .15rem;
        margin: 0rem .05rem;
    }
    span{
        color:gray;
    }
    }
    i{
        display: flex;
        justify-content: center;
        color: grey;
        font-size: .14rem;
        margin: .1rem 0rem;
    }
    }
    .usershow-center{
        display: flex;
        justify-content: center;
        padding: .1rem 0rem;
        border-bottom: .01rem solid gainsboro;
    a{
        width: 35%;
        text-align: center;
    i{
        display: block;
    }
    span{
        display: block;
        color: gray;
        margin-top: .05rem;
    }
    }

    }
    .usershow-bottom{
        display: flex;
    span{
        display: block;
        width: 25%;
        height: .4rem;
        text-align: center;
        line-height: .4rem;
        font-size: .14rem;
        border-right: .01rem solid gainsboro;
    }
        .areadyfocus{
            color: #0CCECE;
        }
    }
</style>