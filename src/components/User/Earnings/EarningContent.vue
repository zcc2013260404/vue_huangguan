<template>
    <div class="content">
        <div class="content-s" v-if="data.earnings">
            <p class="integral">剩余积分</p>
            <span class="zeroo">{{data.earnings.earn.integral}}</span>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    name:"EarningContent",
    computed: {
		...mapGetters({
			data: 'GETDATA',
		})
	},
    beforeMount(){
        this.$store.dispatch('INITDATA')  //给仓库触发事件
    }
}
</script>

<style lang="scss" scoped>
    .content{
        width: 100vw;
        height: 1.5rem;
    }
    .content-s{
        width: 3.35rem;
        height: 1.5rem;
        background-color: aqua;
        margin-left: 0.2rem;
        margin-right: 0.2rem;
        border-radius: 0.1rem;
        box-shadow: 0.03rem 0.03rem 0.03rem 0.03rem rgba(46, 153, 155, 0.1)
    }
    .integral{
        font-size: 0.2rem;
        color: white;
        text-align: center;
        padding-top: 0.3rem;
    }
    .zeroo{
        display: inline-block;
        width: 2.5rem;
        height: 0.5rem;
        background-color: #19BFCB;
        text-align: center;
        font-size: 0.24rem;
        color: white;
        line-height: 0.5rem;
        margin-left: 0.5rem;
        margin-top: 0.3rem;
        border-radius: 0.3rem;
    }
</style>