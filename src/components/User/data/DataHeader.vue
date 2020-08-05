<template>
    <div>
        <div class="Dheader">
            <div class="Header-Left">
                <div class="Left-icon" @click="$router.back(-1)">
                    <svg class="icon bank" aria-hidden="true">
                        <use xlink:href="#iconarrow-left"></use>
                    </svg>
                </div>
                <div class="Right-Title">
                    <span>{{data}}</span>
                </div>
            </div>
            <div class="Header-Right">
                <span @click="click">保存</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DataHeader",
        props: ["data","click"]
    }
</script>

<style scoped>
    .Dheader{
        width: 100%;
        height: 0.5rem;
        background: black;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.03rem;
    }
    .Header-Left{
        height: 100%;
        width: 1.7rem;
        /*background: aqua;*/
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .Left-icon{
        width: 0.2rem;
        height: 0.2rem;
        /*background: black;*/
        font-size: 0;
    }
    .bank{
        width: 0.2rem;
        height: 0.2rem;
    }
    .Right-Title{
        width: 1rem;
        height: 100%;
        /*background: fuchsia;*/
        font-size: 0;
    }
    .Right-Title span{
        font-size: 0.2rem;
        color: white;
        line-height: 0.5rem;
    }
    .Header-Right{
        height: 100%;
        width: 0.6rem;
        /*background: fuchsia;*/
        font-size: 0;
    }
    .Header-Right span{
        font-size: 0.14rem;
        color: white;
        line-height: 0.5rem;
    }
</style>