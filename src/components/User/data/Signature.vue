<template>
    <router-link :to="{name:'autograph',params:{data:data}}" tag="div" class="Signature">
        <div class="Signature-title">签名</div>
        <span class="autograph">{{autograph}}</span>
    </router-link>
</template>

<script>
    export default {
        name: "Signature",
        props:["data","autograph"]
    }
</script>

<style scoped>
    .Signature{
        width: 100%;
        height: 0.6rem;
        background: white;
        margin-bottom: 0.01rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 0.1rem;
        box-sizing: border-box;
    }
    .autograph{
        font-size: .18rem;
        color: #aaa;
    }
    .Signature-title{
        width: 0.65rem;
        height: 100%;
        font-size: 0.18rem;
        text-align: center;
        line-height: 0.6rem;
    }
</style>