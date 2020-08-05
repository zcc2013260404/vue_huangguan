<template>
    <div class="header">
    <router-link :to="'/user'">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarrow-left-copy"></use>
        </svg>
    </router-link>
    <h5>任务系统</h5>
    </div>
</template>

<script>
export default {
    name:"TaskHeader"
}
</script>

<style scoped lang="scss">
    .header{
        width: 100%;
        height: 0.5rem;
        display: flex;
        svg{
            width: 0.3rem;
            height: 0.2rem;
            margin-top: 0.15rem;
            margin-left: 0.1rem;
        }
        h5{
            font-size: 0.16rem;
            margin-left: 1.2rem;
            margin-top: 0.17rem;
            font-weight: 500;
        }
    }
</style>