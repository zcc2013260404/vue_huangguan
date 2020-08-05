<template>
    <div>
        <admin-common title="黑名单管理"></admin-common>
        <Detail  tip="以下用户无法在当前房间发言或私聊" content="输入要解除拉黑的皇冠ID号" name="s1"></Detail>
        <van-dialog
                v-model="show"
                title="标题"
                width="2rem"
                show-cancel-button
        >
            <img src="https://img.yzcdn.cn/vant/apple-3.jpg"/>
        </van-dialog>
<!--        <div @click="show=true">dj</div>-->
    </div>

</template>

<script>
    import AdminCommon from "./Admincommon";
    import Detail from "./Detail"
    import { Dialog } from 'vant';
    export default {
        name: "Blacklist",
        components:{
            Detail,
            [AdminCommon.name]:AdminCommon,
            [Detail.name]:Detail,
            [Dialog.Component.name]: Dialog.Component
        },
        data(){
            return{
                show:false
            }
        }
    }
</script>

<style lang="scss" scoped>
.as{
    width: 1rem;
    height: 1rem;
}
    img{
        height: 2rem;
    }
</style>