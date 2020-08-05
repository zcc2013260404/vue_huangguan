<template>
    <div>
        <admin-common title="直播间管理"></admin-common>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="center">可进行管理的直播间列表</div>
        <div class="user">
            <div><img src="http://123.57.233.41:4000/images/2.jpg"></div>
            <div>
                <p>躲猫猫_5 </p>
                <span>我的身份-房主</span>
            </div>
        </div>
        <div class="bottom">
            <router-link to="manager/admin">设备管理员</router-link>
            <router-link to="manager/nosay">禁言管理</router-link>
            <router-link to="manager/black">黑名单管理</router-link>
        </div>
        </van-pull-refresh>
    </div>

</template>

<script>
    import AdminCommon from "./Admincommon";
    import { PullRefresh } from 'vant';
    export default {
        name: "ManagerPage",
        components:{
            [AdminCommon.name]:AdminCommon,
            [PullRefresh.name]:PullRefresh
        },
        data() {
            return {
                count: 0,
                isLoading: false
            }
        },
        methods: {
            onRefresh() {
                setTimeout(() => {
                    this.isLoading = false;
                    this.count++;
                }, 500);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .center{
        background-color: black;
        color: white;
        font-size: .14rem;
        height: .4rem;
        line-height: .4rem;
        padding-left: .4rem;
        margin-top: -.01rem;
    }
    .user{
        display: flex;
        margin-top: .15rem;
        img{
            width: .4rem;
            height: .4rem;
            border-radius: 50%;
            margin-left: .3rem;
        }
        div:last-child{
            margin-left: .15rem;
            p{
                font-size: .16rem;
                margin-top: .05rem;
            }
            span{
                color:#a600ff;
                display: block;
                margin-top: .05rem;
            }
        }
    }
    .bottom{
        width:3.15rem ;
        display: flex;
        margin: .05rem auto 2rem;
        justify-content: space-around;
        font-size: .16rem;
        a{
            background-color: #0bcdcc;
            padding: .08rem 0.05rem;
            border-radius: .2rem;
            color: white;
            text-decoration: none;
        }
        a:last-child{
            background-color: #a600ff;
        }
    }

</style>