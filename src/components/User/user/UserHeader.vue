<template>
    <div class="my">
        <p>我的</p>
        <router-link :to="'/user/setting'">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconshezhi"></use>
        </svg>
        </router-link>
    </div>
</template>

<script>
export default {
    name:"My"
}
</script>

<style lang="scss" scoped>
    .my{
        width: 100%;
        height: 0.5rem;
        p{
            font-size: 0.16rem;
            text-align: center;
            line-height: 0.5rem;
            font-weight: 800;
            border-bottom: 0.01rem solid gainsboro;
        }
        svg{
            width: 0.2rem;
            height: 0.2rem;
            position: absolute;
            right: 0.2rem;
            top: 0.15rem;
        }
    }
</style>