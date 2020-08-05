<template>
    <div class="details">
        <img :src=data.userimage alt="">
        <a @click="$router.back(-1)">
        <svg class="lv" aria-hidden="true">
            <use xlink:href="#iconarrow-left"></use>
        </svg>
        </a>
        <div class="ranking">
            <svg class="lvv" aria-hidden="true">
                <use xlink:href="#iconaixin"></use>
            </svg>
            <p class="list">守护排行榜</p>
            <svg class="lvvv" aria-hidden="true">
                <use xlink:href="#iconarrow-right"></use>
            </svg>
        </div>
        <div class="gif" v-if="this.data.islive === 1">
            <img src="../../../../public/assets/Jin/live.gif" alt="">
            <p>LIVE</p>
        </div>
        <div v-else></div>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    name:"FansHeader",
    computed: {
		...mapGetters({
			data: 'GETDATA'
		})
	},
    beforeMount(){
      let { userid } = this.$route.query;
      this.$store.dispatch('INITDATA',userid);
      //给仓库触发事件
    }
}

</script>

<style lang="scss" scoped>
    .details{
        width: 100%;
        height: 2.25rem;
        img{
            width: 3.75rem;
            height: 2.25rem;
        }
    }
    .lv{
            width: 0.2rem;
            height: 0.2rem;
            position: absolute;
            top: 0.2rem;
            left: 0.15rem;
        }
    .ranking{
            width: 1.1rem;
            height: 0.3rem;
            background: rgba(0, 0, 0, 0.3);
            position: absolute;
            top: 1.8rem;
            left: 0.1rem;
            border-radius: 0.15rem;
        }
    .lvv{
        font-size: 0;
        width: 0.2rem;
        height: 0.2rem;
        position: absolute;
        left: 0.05rem;
        top: 0.07rem;
    }
    .list{
        position: absolute;
        left: 0.3rem;
        color: white;
        top: 0.1rem;
    }
    .lvvv{
        width: 0.25rem;
        height: 0.25rem;
        position: absolute;
        left: 0.85rem;
        top: 0.04rem;
    }
    .gif{
        width: 1rem;
        height: 0.35rem;
        background-color: #0FE0C7;
        // background-color: red;
        position: absolute;
        border-radius: 0.3rem 0rem 0rem 0.3rem;
        top: 0.8rem;
        right: 0;
        display: flex;
    }
    .gif p{
        font-size: 0.16rem;
        color: white;
        font-weight: bold;
        text-align: right;
        padding-right: 0.15rem;
        line-height: 0.35rem;
    }
    .gif img{
        width: 0.35rem;
        height: 0.35rem;
        padding-left: 0.15rem;
    }
</style>