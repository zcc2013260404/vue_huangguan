<template>
    <div class="buygift" v-if="data">
        <div class="smallgift" v-for="(n,i) in data" @click="add(i,n.giftprice)" :class="isclass==i?'active ':''" :key="i"  >
            <img :src="n.image" class="smallimg">
            <span>{{n.giftname}}</span>
            <i>{{n.giftprice}}</i>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Gift",
        data(){
            return{
                isclass:0,
                ref:null,
            }
        },
        props:["data"],
        methods:{
            add(i,a){
                this.isclass=i;
                console.log(i)
               // this.ref=this.$el.querySelectorAll('.smallimg')[i]
               // this.$emit("gift",this.ref.src)
                this.$emit("gift",i,a)
            },
        },

    }
</script>

<style lang="scss" scoped>
    .buygift{
        display: flex;
        flex-wrap: wrap;
        height: 1.6rem;
        overflow: hidden;
        overflow-y: auto;
    .active{
        border: .015rem solid #0CCECE;
        box-sizing: border-box;
        position: relative;
    &::before{
         content: "1";
         display: block;
         width: .25rem;
         height: .15rem;
         display: flex;
         align-items: center;
         justify-content: center;
         background-color: #0CCECE;
         position: absolute;
         color: white;
     }
    }
    .smallgift{
        text-align: center;
        width: 25%;
        height: .8rem;
    }
    img{
        width: .3rem;
        height: .3rem;
        margin-top: .1rem;
    }
    span{
        display: block;
        color: white;
        font-size: .14rem;
        margin-top: .05rem;
    }
    i{
        display: block;
        color: yellowgreen;
        margin-top: .05rem;
    }

    }
</style>