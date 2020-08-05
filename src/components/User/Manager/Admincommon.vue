<template>
    <div>
        <div class="header">
            <a href="javascript:history.back(-1)">
                <svg class="icon" aria-hidden="true">
                    <use class="icon1" xlink:href="#iconfanhui" ></use>
                </svg>
            </a>
            <div>{{title}}</div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "AdminCommon",
        props:["title"]
    }
</script>

<style lang="scss" scoped>
.header{
    height: .5rem;
    background-color: black;
    display: flex;
    line-height: .5rem;
    margin-bottom: -.01rem;
    svg{
        width: .2rem;
        height: .2rem;
        fill: white;
        margin: .15rem;
    }
    div{
        color:white;
        font-size: .16rem;
    }
}
</style>