<template>
    <div class="focus-top" v-if="data">
        <span class="su">{{data.username}}</span>
        <svg class="iconer" aria-hidden="true">
            <use :xlink:href=data.sex></use>
        </svg>
        <svg class="icon" aria-hidden="true">
            <use :xlink:href=data.vipclass></use>
        </svg>
        <p class="su-id">{{data.userid}}</p>
        <p class="signature">{{data.autograph}}</p>
        <span class="meg">关注</span>
        <em class="meg-i">{{data.user_attention_num}}</em>
        <span class="fan">粉丝</span>
        <em class="fan-i">{{data.user_follow_num}}</em>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    name:"FansContent",
    computed: {
		...mapGetters({
			data: 'GETDATA',
		})
	},
    beforeMount(){
      let { userid } = this.$route.query;
      this.$store.dispatch('INITDATA',userid);
    }
}
</script>

<style lang="scss" scoped>
    .focus-top{
        width: 100%;
        height: 1.3rem;
    }
    .su{
        font-size: 0.2rem;
        font-weight: 800;
        position: absolute;
        top: 2.3rem;
        left: 0.1rem;
    }
    .iconer{
        width: 0.15rem;
        height: 0.15rem;
        position: absolute;
        top: 2.3rem;
        left: 1.1rem;
    }
    .icon{
        width: 0.2rem;
        height: 0.2rem;
        position: absolute;
        top: 2.28rem;
        left: 1.28rem;
    }
    .su-id{
        color: #cccccc;
        position: absolute;
        top: 2.7rem;
        left: 0.1rem;
    }
    .signature{
        position: absolute;
        top: 3rem;
        left: 0.1rem;
        color: gray;
        font-size: 0.14rem;
        text-shadow: 0rem 0.02rem 0.02rem gainsboro;
    }
    .meg{
        font-size: 0.14rem;
        position: absolute;
        top: 3.4rem;
        left: 0.1rem;
    }
    .meg-i{
        font-size: 0.18rem;
        font-weight: 800;
        position: absolute;
        top: 3.35rem;
        left: 0.6rem;
    }
    .fan{
        font-size: 0.14rem;
        position: absolute;
        top: 3.4rem;
        left: 1rem;
    }
    .fan-i{
        font-size: 0.18rem;
        font-weight: 800;
        position: absolute;
        top: 3.35rem;
        left: 1.5rem;
    }
</style>