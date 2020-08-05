<template>
    <div>
        <admin-common title="禁言管理"></admin-common>
        <Detail tip="以下用户无法在当前房间发言或私聊" content="输入要解除禁言的皇冠ID号"></Detail>
    </div>
</template>

<script>
    import AdminCommon from "./Admincommon";
    import Detail from "./Detail"
    export default {
        name: "Nosay",
        components:{
            [AdminCommon.name]:AdminCommon,
            [Detail.name]:Detail
        }
    }
</script>

<style scoped>

</style>