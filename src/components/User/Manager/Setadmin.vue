<template>
    <div>
        <admin-common title="设置管理员"></admin-common>
        <Detail tip="以下用户无法在当前房间发言或私聊" content="输入要添加的皇冠ID号"></Detail>
    </div>

</template>

<script>
    import AdminCommon from "./Admincommon";
    import Detail from "./Detail"
    export default {
        name: "Setadmin",
        components:{
            [AdminCommon.name]:AdminCommon,
            [Detail.name]:Detail
        }
    }
</script>

<style scoped>

</style>