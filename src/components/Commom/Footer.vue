<template>
  <div class="footer">
    <router-link tag="span"
                 to="/home"><i class="footer-index"
         :class="{'footer-index-active':$route.path === '/home'}"></i><span>首页</span></router-link>
    <div class="live-img"
         @click="show = true"><img src="http://123.57.233.41:4000/images/live.png"
           alt=""></div>
    <van-popup v-if="real===0"
               v-model="show"
               position="bottom"
               :style="{ height: '20%' }"
               class="home-popup">
      <router-link to="/startLive"
                   tag="p"
                   class="go-live">
        <span>
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#iconicon_kaishizhibo"></use>
          </svg>
        </span>
        <span @click="golive">开始直播</span>
      </router-link>
      <p @click="show = false">
        <span>
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#iconyuangongchelianglika"></use>
          </svg>
        </span>
        <span>下次吧</span>
      </p>
    </van-popup>
    <van-overlay v-else
                 class="home-overlay"
                 :show="show"
                 @click="show = false">
      <div class="wrapper"
           @click.stop="show = false">
        <div class="block">
          <p><img src="http://123.57.233.41:4000/images/renzhen.jpg"
                 alt=""></p>
          <p>开播前需要实名认证</p>
          <p class="home-sure">
            <span @click="show = false">稍后</span>
            <router-link class="home-go"
                         tag="span"
                         to="/user/real">立即认证</router-link>
          </p>
        </div>
      </div>
    </van-overlay>
    <router-link tag="span"
                 to="/user"><i class="footer-user"
         :class="{'footer-user-active':$route.path === '/user'}"></i><span>我的</span></router-link>
  </div>
</template>
<script>
import { Overlay, Popup } from 'vant';
import home from "../../apis/Home/home";
import { mapGetters } from 'vuex'
export default {
  name: "YT-footer",
  components: {
    [Overlay.name]: Overlay,
    [Popup.name]: Popup
  },
  data () {
    return {
      show: false,
      real: 1
    }
  },
  methods: {
    //是否实名认证
    async _initGetRealInfo () {
      let getRealInfo = await home.getVerficationInfo(this.token);
      this.real = getRealInfo.status;
      // console.log(this.real);
    },
    golive(){
      // this.$router.push("http://39.107.120.161/tuiliu/video_rtmp/index.html")
    }
  },
  beforeMount () {
    this._initGetRealInfo();
  },
  computed: {
    ...mapGetters({
      token: 'GET_TOKEN'
    })
  }
}
</script>

<style lang="scss" scoped>
.footer {
  font-size: 0.12rem;
  height: 0.5rem;
  border-top: 0.005rem solid #eee;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  text-align: center;
  background: #fff;
  z-index: 3;
  span {
    padding-top: 0.05rem;
    color: #ccc;
    i {
      display: block;
      padding-top: 0.05rem;
      height: 0.2rem;
      text-align: center;
      margin: 0 auto;
    }
    .footer-index {
      background: url("http://123.57.233.41:4000/images/footer.png") 0 -0.3rem no-repeat;
      background-size: 0.7rem 0.52rem;
    }
    .footer-user {
      background: url("http://123.57.233.41:4000/images/footer.png") -0.48rem 0 no-repeat;
      background-size: 0.7rem 0.52rem;
    }
    .footer-index-active {
      background: url("http://123.57.233.41:4000/images/footer.png") 0 0
        no-repeat;
      background-size: 0.7rem 0.52rem;
      + span {
        color: #000;
      }
    }
    .footer-user-active {
      background: url("http://123.57.233.41:4000/images/footer.png") -0.48rem -0.3rem
        no-repeat;
      background-size: 0.7rem 0.52rem;
      + span {
        color: #000;
      }
    }
  }
  .live-img {
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    position: relative;
    top: -0.15rem;
    border: 0.03rem solid #fff;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .block {
    width: 90%;
    height: 2.35rem;
    background-color: #fff;
    img {
      width: 2.5rem;
      height: 1.5rem;
    }
    p {
      margin-bottom: 0.15rem;
      font-size: 0.16rem;
    }
    .home-sure {
      display: flex;
      justify-content: space-around;
      color: #0f121b;
      .home-go {
        color: #ff7800;
      }
    }
  }
  .home-popup {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon {
      width: 0.35rem;
      height: 0.3rem;
    }
    p {
      span {
        display: block;
        padding-bottom: 0.15rem;
        font-size: 0.14rem;
        color: #000;
      }
    }
  }
}
</style>