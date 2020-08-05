<template>
  <div class="channel">
    <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
      <use xlink:href="#iconfanhuitubiao"></use>
    </svg>
    <MyPlay v-if="cctvLiveItem" :cctvInfo="cctvLiveItem"/>
    <loading v-else/>
  </div>
</template>

<script>
  import MyPlay from "../../components/Commom/MyPlay";
  import cctvLive from "../../apis/cctvLive/cctvLive";
  import loading from "../../components/Commom/loading";
  export default {
    name: "Channel",
    components:{
      MyPlay,
      loading
    },
    data(){
      return {
        cctvLiveItem:""
      }
    },
    methods:{
      async _initGetCctvInfo(){
        let { id } = this.$route.query;
        let a = await cctvLive.getLiveItemById(id);
        this.cctvLiveItem = a.flowaddress;
      },
    },
    async beforeMount() {
      await this._initGetCctvInfo()
    }
  }
</script>

<style lang="scss" scoped>
.channel{
  width: 100vw;
  height: 100vh;
  background: #000;
  box-sizing: border-box;
  padding-top: 2rem;
  .icon{
    position: fixed;
    top: 0.1rem;
    left: 0.1rem;
    width: 0.25rem;
    height: 0.25rem;
    fill: #fff;
  }
}
</style>