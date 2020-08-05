<template>
    <div class="header">
        <router-link :to="'/user'">
        <svg class="righter" aria-hidden="true">
            <use xlink:href="#iconarrow-left-copy"></use>
        </svg>
        </router-link>
        <p class="my">我的收益</p>
    </div>
</template>

<script>
export default {
    name:"Earnings"
}
</script>

<style lang="scss" scoped>
    .header{
        width: 100vw;
        height: 0.5rem;
        display: flex;
        align-items: center;
    }
    .righter{
        width: 0.3rem;
        height: 0.3rem;
        margin-left: 0.1rem;
    }
    .my{
        font-size: 0.16rem;
        font-weight: 700;
        margin-left: 1.2rem;
    }
</style>