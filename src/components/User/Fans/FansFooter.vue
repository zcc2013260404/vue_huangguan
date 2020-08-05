<template>
    <van-tabs class="van"  color="aqua" swipeable>
        <van-tab title="关注">
            <div class="lister-one" v-for="(u,i) in data.user_attentions" :key="i" @click="goPersonInfo(a.userid)">
                <div>
                    <img :src=u.userimage alt="">
                </div>
                <div>
                    <p>{{u.username}}</p>
                    <p>{{u.autograph}}</p>
                </div>
                <div>
                    <svg class="righter" aria-hidden="true">
                        <use xlink:href="#iconjiantou"></use>
                    </svg>
                </div>
            </div>
        </van-tab>
        <van-tab title="粉丝">
            <div class="lister-one" v-for="(a,i) in data.user_follows" :key="i"  @click="goPersonInfo(a.userid)">

                <div>
                    <img :src=a.userimage alt="">
                </div>
                <div>
                    <p>{{a.username}}</p>
                    <p>{{a.autograph}}</p>
                </div>
                <div>
                    <svg class="righter" aria-hidden="true">
                        <use xlink:href="#iconjiantou"></use>
                    </svg>
                </div>
            </div>
        </van-tab>
    </van-tabs>
</template>

<script>
import { Tab, Tabs } from 'vant';
import {mapGetters} from "vuex"
export default {
    name:"FansFooter",
    components: {
        [Tabs.name]: Tabs,
        [Tab.name]: Tab
    },
    data(){
        return {
            swipeable:"true"
        }
    },
    computed: {
		...mapGetters({
			data: 'GETDATA',
		})
	},
    beforeMount(){

      let { userid } = this.$route.query;
      // console.log(userid)
      this.$store.dispatch('INITDATA',userid);  //给仓库触发事件
    },
  mounted(){
    console.log(this.data.user_follows)
  },
    methods:{
      goPersonInfo(id){
        this.$router.push(`/user/fans?userid=`+id)
      }
    }
}
</script>

<style lang="scss" scoped>
    .focus{
        width: 100%;
        height: 1.8rem;
    }
    
    .lister{
        width: 100vw;
    }
    .lister-one{
        width: 100vw;
        height: 0.8rem;
        display: flex;
    }
    .lister-one div:nth-child(1){
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        text-align: center;
        margin-left: 0.1rem;
        font-size: 0;
        display: flex;
      align-items: center;
    }
    .lister-one div:nth-child(1) img{
        width:0.5rem;
      border-radius: 50%;
        height:0.5rem;
    }
    .lister-one div:nth-child(2){
        width: 2.5rem;
        height: 0.8rem;
    }
    .lister-one div:nth-child(2) p:nth-child(1){
        font-size: 0.14rem;
        margin-top: 0.2rem;
        margin-left: 0.1rem;
    }
    .lister-one div:nth-child(2) p:nth-child(2){
        font-size: 0.12rem;
        margin-top: 0.1rem;
        margin-left: 0.1rem;
        color: #cccccc;
    }
    .lister-one div:nth-child(3){
        width: 0.65rem;
        height: 0.8rem;
    }
    .righter{
        width: 0.2rem;
        height: 0.2rem;
        margin-top: 0.3rem;
        margin-left: 0.2rem;
    }
</style>