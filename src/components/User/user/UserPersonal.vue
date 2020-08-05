<template>
<div @click="goPersonInfo(data.userid)">
    <div class="person">
        <div class="ico">
            <div>
                <img :src=data.userimage alt="">
            </div>
            <div>
                <span class="name">{{data.username}}</span>
                <p class="id">{{data.userid}}</p>
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href=data.sex></use>
                </svg>
                <svg class="lv" aria-hidden="true">
                    <use :xlink:href=data.vipclass></use>
                </svg>
            </div>
        </div>
        <div class="iconer">
            <div>
                <span>{{data.user_attention_num}}</span>
                <p>关注</p>
            </div>
            <div>
                <span>{{data.user_follow_num}}</span>
                <p>粉丝</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    name:"UserPersonal",
    props:["goPersonInfo"],
    computed: {
		...mapGetters({
			data: 'GETDATA',
      token:"GET_TOKEN"
		})
	},
    beforeMount(){
        this.$store.dispatch('INITDATA',this.token)  //给仓库触发事件
    }
}
</script>

<style lang="scss" scoped>
    .person{
        width: 100%;
        height: 1.7rem;
        background-color: whitesmoke;
    }
    .ico{
        width: 100%;
        height: 1rem;
        display: flex;
        background-color: white;
    }
    .ico div:nth-child(1){
        width: 1rem;
        height: 1rem;
        font-size: 0;
        text-align: center;
        line-height: 1.7rem;
    }
    .ico div:nth-child(1) img{
        width: 70%;
        height: 70%;
        border-radius: 50%;
    }
    .ico div:nth-child(2){
        width: 2.75rem;
        height: 1rem;
        font-size: 0;
    }
    .iconer{
         width: 100%;
         height: 0.7rem;
         display: flex;
    }
    .name{
        font-size: 0.15rem;
        font-weight: 800;
        position: absolute;
        top: 0.8rem;
        left: 1.2rem;
    }

    .id{
        font-size: 0.12rem;
        position: absolute;
        color: #cccccc;
        top: 1.05rem;
        left: 1.2rem;
    }
    .icon{
        width: 0.18rem;
        height: 0.18rem;
        position: absolute;
        top: 0.8rem;
        left: 2rem;
    }
    .lv{
        width: 0.25rem;
        height: 0.25rem;
        position: absolute;
        top: 0.77rem;
        left: 2.2rem;
    }
    .iconer div:nth-child(1){
        width: 1.875rem;
        height: 0.6rem;
        font-size: 0;
        text-align: center;
        background-color: white;
    }
    .iconer div:nth-child(1) span{
        font-size: 0.2rem;
        line-height: 0.4rem;
    }
    .iconer div:nth-child(1) p{
        font-size: 0.14rem;
        line-height: 0rem;
        color: #cccccc;
    }
    .iconer div:nth-child(2){
        width: 1.875rem;
        height: 0.6rem;
        font-size: 0;
        text-align: center;
        background-color: white;
    }
    .iconer div:nth-child(2) span{
        font-size: 0.2rem;
        line-height: 0.4rem;
    }
    .iconer div:nth-child(2) p{
        font-size: 0.14rem;
        line-height: 0rem;
        color: #cccccc;
    }
</style>