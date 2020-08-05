<template>
    <router-link :to="'/user/Level'" tag="div">
        <div class="interiort">
            <div>
                <svg class="lvt" aria-hidden="true">
                    <use xlink:href="#icondengji-copy"></use>
                </svg>
            </div>
            <div>
                <span class="leve">我的等级</span>
                <span class="LV">LV.1</span>
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
    name:"Level"
}
</script>

<style lang="scss" scoped>
    .interiort{
        width: 100%;
        height: 0.5rem;
        background-color: white;
        display: flex;
    }
    .interiort div:nth-child(1){
        width: 0.5rem;
        height: 0.4rem;
        font-size: 0;
        text-align: center;
        line-height: 0.65rem;
    }
    .lvt{
        width: 0.2rem;
        height: 0.2rem;
    }
    .interiort div:nth-child(2){
        width: 2.8rem;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0;
    }
    .leve{
        font-size: 0.12rem;
    }
    .LV{
        font-size: 0.12rem;
        margin-left: 2rem;
        color: #cccccc;
    }
    .interiort div:nth-child(3){
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