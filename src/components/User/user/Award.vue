<template>
<router-link :to="'/user/award'" tag="div">
    <div class="Award">
        <div class="interiorr">
            <div>
                <svg class="lv" aria-hidden="true">
                    <use xlink:href="#iconjiangli"></use>
                </svg>
            </div>
            <div>
                <p>我的奖励</p>
            </div>
            <div>
                <svg class="right" aria-hidden="true">
                    <use xlink:href="#iconjiantou"></use>
                </svg>
            </div>
        </div>
    </div>
</router-link>
</template>

<script>
export default {
    name:"Award"
}
</script>

<style lang="scss" scoped>
    .Award{
        width: 100%;
        height: 0.5rem;
        background-color: whitesmoke;
    }
    .interiorr{
        width: 100%;
        height: 0.4rem;
        background-color: white;
        display: flex;
    }
    .interiorr div:nth-child(1){
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
    .interiorr div:nth-child(2){
        width: 2.8rem;
        height: 0.4rem;
        line-height: 0.4rem;
    }
    .interiorr div:nth-child(2) p{
        font-size: 0.12rem;
    }
    .interiorr div:nth-child(3){
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