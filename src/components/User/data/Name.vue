<template>
    <router-link :to="{name:'name',params:{data:data}}" tag="div" class="Dname">
        <div class="Dname-title">昵称</div>
        <span class="username">{{userid}}</span>
    </router-link>
</template>

<script>
    export default {
        name: "Name",
        props: ["data","userid"]
    }
</script>

<style scoped>
    .Dname{
        width: 100%;
        height: 0.45rem;
        background: white;
        margin-bottom: 0.01rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 0.1rem;
        box-sizing: border-box;
    }
    .username{
        font-size: .18rem;
        color: #aaa;
    }
    .Dname-title{
        width: 0.65rem;
        height: 100%;
        font-size: 0.18rem;
        text-align: center;
        line-height: 0.45rem;
    }
</style>