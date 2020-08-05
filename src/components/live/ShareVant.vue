<template>
    <div class="content">
        <a v-for="(n,i) in data">
            <div>
                <img :src="n.userimage">
            </div>
            <div>
                <p>{{n.userid}}
                    <i>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#iconxingxing"></use>
                        </svg>
                        12
                    </i>
                </p>
                <span>ID:{{n.id}}</span>
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        name: "ShareVant",
        props:["data"],
    }
</script>

<style lang="scss" scoped>
    .content{
        height:3rem ;
        overflow-y: scroll;
        &::-webkit-scrollbar{
            display:none;
        }
        a {
            display: flex;
            align-items: center;
            height: .6rem;
            border-bottom: .01rem solid #d9d3d3;
            div:first-child{
                img{
                    width: .4rem;
                    height: .4rem;
                    margin-left: .1rem;
                    border-radius: 50%;
                }
            }
            div:last-child{
                margin-left: .2rem;
                p{
                    font-size: .14rem;
                    display: flex;
                    align-items: center;
                    height: .2rem;
                    i{
                        display: flex;
                        padding:0 .05rem;
                        margin-left: .1rem;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(to right,#48f5f3,#03ceca);
                        border-radius: .1rem;
                        color: white;
                        font-size: .12rem;
                        svg{
                            width: .15rem;
                            height: .15rem;
                        }
                    }
                }
                span{
                    font-size: .16rem;
                }
            }
        }
    }
</style>