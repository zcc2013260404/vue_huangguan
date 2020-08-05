<template>
  <div class="content">
    <van-notice-bar text="恭喜大龙邀请好朋友大虎加入直播,获得奖金500元。小金同学获得月冠军,奖励888元。"
                    left-icon="volume-o"
                    background="red"
                    color="white" />
    <div class="content1">
      <button @click="show = true"
              class="btn">立即邀请朋友</button>
      <van-overlay :show="show">
        <div class="wrapper"
             @click="show = false">
          <div class="block">
            <p>分享到</p>
            <div class="popup">
              <div>
                <img src="http://123.57.233.41:4000/images/wei.png"
                     alt="">
                <p>微信</p>
              </div>
              <div>
                <img src="http://123.57.233.41:4000/images/peng.png"
                     alt="">
                <p>朋友圈</p>
              </div>
              <div>
                <img src="http://123.57.233.41:4000/images/er.png"
                     alt="">
                <p>扫码</p>
              </div>
            </div>
          </div>
        </div>
      </van-overlay>
    </div>
    <div>
      <p class="dianji">如有疑问请参考<a @click="ff">活动规则</a></p>
      <van-action-sheet v-model="shows"
                        title="活动规则"
                        v-if="shows"
                        class="contents">
        <p>活动规则：</p>
        <p>1、邀请好友得话费活动，须为用户（简称‘邀请者’）以分享方式邀请好友首次注册下载最新版的皇冠直播平台客户端，好友使用邀请者的分享链接使用微信或者手机号完成注册后，下载并登陆平台即可完成邀请活动绑定。首次邀请立得1元话费奖励。</p>
        <p>2、好友完成一天活跃邀请者可以获得1元话费，完成3天活跃，邀请者可以再获得3元话费，完成7天活跃，邀请者可以再获得7元话费。（如为快速浏览，观看时长端且无任何发言，邀请者将无权获得任何奖励）</p>
        <p>3、好友累计充值满100元，邀请者可以获得8元话费，累计充值满1000元，邀请者可以获得80元话费。</p>
        <p>4、邀请好友数量无上限，邀请越多奖励越多。</p>
        <p>5、每个新用户只能被邀请一次，同一个登录账号、同一个手机号、同一个设备都视为同一个用户。</p>
      </van-action-sheet>
    </div>
  </div>
</template>

<script>
import { NoticeBar } from 'vant';
import { Overlay } from 'vant';
import { ActionSheet } from 'vant';

export default {
  name: "TaskContent",
  data () {
    return {
      show: false,
      shows: false
    }
  },
  components: {
    [NoticeBar.name]: NoticeBar,
    [Overlay.name]: Overlay,
    [ActionSheet.name]: ActionSheet
  },
  methods: {
    ss () {
      this.show = !this.show
    },
    ff () {
      this.shows = !this.shows
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  .content1 {
    width: 100%;
    height: 5.5rem;
    // background-color: aqua;
    background: url(http://123.57.233.41:4000/images/2222.png);
    background-repeat: no-repeat;
    background-size: cover;
    .btn {
      width: 1.5rem;
      height: 0.4rem;
      color: white;
      background-color: red;
      border: none;
      font-size: 0.16rem;
      border-radius: 0.2rem;
      margin-left: 1.2rem;
      margin-top: 0.5rem;
      font-weight: bold;
    }
  }
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 3rem;
  height: 1.5rem;
  background-color: white;
  border-radius: 0.151rem;
  p {
    font-size: 0.18rem;
    font-weight: bold;
    margin-left: 0.1rem;
    margin-top: 0.1rem;
  }
  .popup {
    display: flex;
    justify-content: space-around;
    div {
      width: 1rem;
      height: 1.5rem;
      margin-top: 0.05rem;
      img {
        width: 0.5rem;
        height: 0.5rem;
        margin-left: 0.2rem;
        margin-top: 0.1rem;
      }
      p {
        font-size: 0.14rem;
        margin-left: 0.3rem;
      }
    }
  }
}
.van-popup--bottom.van-popup--round {
  height: 2.5rem;
}
.dianji {
  font-size: 0.16rem;
  text-align: center;
  line-height: 0.25rem;
  a {
    font-weight: bold;
    color: red;
  }
}
.contents {
  p {
    font-size: 0.13rem;
    padding: 0.02rem;
  }
}
</style>