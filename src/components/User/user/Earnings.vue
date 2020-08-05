<template>
    <router-link :to="'/user/Earnings'" tag="div">
        <div class="interior">
            <div>
                <svg class="lv" aria-hidden="true">
                    <use xlink:href="#iconshouyi"></use>
                </svg>
            </div>
            <div>
                <span class="earn">我的收益</span>
                <span class="integral">0积分</span>
            </div>
            <div>
                <svg class="right" aria-hidden="true">
                    <use xlink:href="#iconjiantou"></use>
                </svg>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name:"Earnings"
}
</script>

<style lang="scss" scoped>
    .interior{
        width: 100%;
        height: 0.5rem;
        background-color: white;
        display: flex;
    }
    .interior div:nth-child(1){
        width: 0.5rem;
        height: 0.4rem;
        font-size: 0;
        text-align: center;
        line-height: 0.65rem;
    }
    .lv{
        width: 0.2rem;
        height: 0.2rem;
    }
    .interior div:nth-child(2){
        width: 2.8rem;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0;
    }
    .earn{
        font-size: 0.12rem;
    }
    .integral{
        font-size: 0.12rem;
        margin-left: 2rem;
        color: #cccccc;
    }
    .interior div:nth-child(3){
        width: 0.45rem;
        height: 0.4rem;
        font-size: 0;
        text-align: center;
        line-height: 0.6rem;
    }
    .right{
        width: 0.15rem;
        height: 0.15rem;
    }
</style>