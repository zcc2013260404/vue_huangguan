<template>
  <div class="start-live">
    <div class="start-item">
      <p class="start-live-back">
        <span @click="goBack">
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#iconfanhuitubiao"></use>
          </svg>
        </span>
        <span>
          <svg class="icon icon1"
               aria-hidden="true">
            <use xlink:href="#iconzhuanhuanshexiangtou-copy-copy"></use>
          </svg>
        </span>
      </p>
      <div class="start-live-title">
        <p>已为你生成专属直播链接<p/>
        <p>请你使用该推流地址进行推流<p/>
        <a class="start-live-link">{{startLiveInfo.data.room_ip}}</a>
        <p>完成推流即可点击下方按钮开启你的直播之旅</p>
      </div>
      <span class="start-button" @click="goLiveRoom" >开启视频直播</span>
    </div>
  </div>
</template>

<script>
  import home from "../../apis/Home/home";
  import { mapGetters } from 'vuex'
  export default {
  name: "StartLive",
  data(){
    return {
      startLiveInfo:null
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    async _initGoLiveRoom(){
      this.startLiveInfo = await home.getStartLiveInfo(this.token);
    },
    goLiveRoom(){
      this.$router.push('/live');
    }
  },
  computed:{
    ...mapGetters({
      token:'GETTOKEN'
    })
  },
  beforeMount() {
    this._initGoLiveRoom();
  }
}
</script>

<style lang="scss" scoped>
.start-live {
    margin: 0 auto;
    .start-item {
      width: 100vw;
      height: 100vh;
      background: url("../../../public/assets/startLive/startLive.jpg") no-repeat;
      background-size:cover ;
    .start-button {
      position: fixed;
      bottom: 0.8rem;
      left: 0.4rem;
      background: #0bcdcc;
      padding: 0.15rem 1rem;
      color: #fff;
      border-radius: 0.5rem;
      font-size: 0.16rem;
    }
    .start-live-title {
      text-align: center;
      box-sizing: border-box;
      position: fixed;
      top: 1.2rem;
      left: 0.2rem;
      padding: 0.4rem 0 0.6rem;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 0.15rem;
      width: 90%;
      font-size: 0.16rem;
      color: #0bcdcc;
      p{
        padding-bottom: 0.05rem;
      }
      .start-live-link{
        color: #fff;
        display: inline-block;
        padding: 0.1rem 0;
        font-size: 0.14rem;
      }
    }
    .start-live-back {
      padding: 0.1rem 0.2rem;
      display: flex;
      justify-content: space-between;
      .icon {
        width: 0.25rem;
        height: 0.25rem;
        fill: #ccc;
      }
      .icon1 {
        width: 0.35rem;
        height: 0.35rem;
      }
    }
  }
}
</style>