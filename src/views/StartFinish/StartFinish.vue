<template>
  <div class="finish">
    <div class="finisher">
      <div>
        <div>
          <img src="../../../public/assets/Jin/111.png"
               alt="">
        </div>
        <router-link :to="'/home'">
          <svg class="icon"
               aria-hidden="true">
            <use xlink:href="#iconclose"></use>
          </svg>
        </router-link>
      </div>
      <div>lemon_120</div>
      <div>悦兔ID:4194051</div>
    </div>
    <div class="day">
      <!-- <img src="../../../public/assets/Jin/su-110.png"
           alt=""> -->
    </div>
    <div class="crown">
      <div class="crown-one">
        <div>
          <img src="../../../public/assets/Jin/111.png"
               alt="">
        </div>
        <div> 虚位以待</div>
        <div>0</div>
        <div>积分</div>
      </div>
      <div class="crown-two">
        <div>
          <img src="../../../public/assets/Jin/111.png"
               alt="">
        </div>
        <div>虚位以待</div>
        <div>0</div>
        <div>积分</div>
      </div>
      <div class="crown-three">
        <div>
          <img src="../../../public/assets/Jin/111.png"
               alt="">
        </div>
        <div>虚位以待</div>
        <div>0</div>
        <div>积分</div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-one">
        <p>分享一下吧</p>
      </div>
      <div class="footer-two">
        <div>
          <svg class="icon2"
               aria-hidden="true">
            <use xlink:href="#iconweixin1"></use>
          </svg>
          <p>微信</p>
        </div>
        <div>
          <svg class="icon3"
               aria-hidden="true">
            <use xlink:href="#iconpengyouquan"></use>
          </svg>
          <p>朋友圈</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StartFinish"
}
</script>

<style lang="scss" scoped>
.finish {
  width: 100vw;
  height: 100vh;
  background-image: url("http://123.57.233.41:4000/images/1.jpg");
  background-size: 100% 100%;
}
.finisher {
  width: 3.65rem;
  height: 1.5rem;
  padding-top: 0.1rem;
}
.finisher div:nth-child(1) {
  width: 100vw;
  height: 0.9rem;
  display: flex;
  justify-content: center;
}
.icon {
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
}
.finisher div:nth-child(1) div:nth-child(1) {
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
  font-size: 0;
}
.finisher div:nth-child(1) div:nth-child(1) img {
  width: 120%;
  height: 120%;
}
.finisher div:nth-child(2) {
  width: 100vw;
  height: 0.3rem;
  text-align: center;
  font-size: 0.16rem;
  line-height: 0.4rem;
  color: white;
}
.finisher div:nth-child(3) {
  width: 100vw;
  height: 0.3rem;
  margin-top: 0.1rem;
  text-align: center;
  font-size: 0.12rem;
  line-height: 0.3rem;
  color: whitesmoke;
}
.finishh {
  width: 3rem;
  height: 0.7rem;
  border-top: 0.01rem solid whitesmoke;
  margin-left: 0.375rem;
  margin-right: 0.375rem;
  margin-top: 0.2rem;
}
.finishh-one {
  width: 3rem;
  height: 0.5rem;
  display: flex;
}
.finishh-one div:nth-child(1) {
  width: 1rem;
  height: 0.5rem;
  font-size: 0.18rem;
  color: #13d7db;
  text-align: center;
  line-height: 0.5rem;
}
.finishh-one div:nth-child(2) {
  width: 1rem;
  height: 0.5rem;
  color: #fba23d;
  font-size: 0.16rem;
  text-align: center;
  line-height: 0.5rem;
}
.finishh-one div:nth-child(3) {
  width: 1rem;
  height: 0.5rem;
  font-size: 0.16rem;
  color: #f0d275;
  text-align: center;
  line-height: 0.5rem;
}
.finishh-two {
  width: 3rem;
  height: 0.2rem;
  display: flex;
}
.finishh-two div:nth-child(1) {
  width: 1rem;
  height: 0.5rem;
  color: white;
  text-align: center;
}
.finishh-two div:nth-child(2) {
  width: 1rem;
  height: 0.5rem;
  color: white;
  text-align: center;
}
.finishh-two div:nth-child(3) {
  width: 1rem;
  height: 0.5rem;
  color: white;
  text-align: center;
}
.day {
  width: 100vw;
  height: 0.5rem;
  line-height: 0.7rem;
}
.day img {
  width: 30%;
}
.crown {
  width: 3.2rem;
  height: 1.7rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-around;
}
.crown-one {
  width: 1rem;
  height: 1.5rem;
}
.crown-one div:nth-child(1) {
  width: 1rem;
  height: 1rem;
  background-image: url(../../../public/assets/Jin/su-111.png);
  background-size: 100% 100%;
  text-align: center;
  line-height: 1.91rem;
}
.crown-one div:nth-child(1) img {
  width: 90%;
  height: 90%;
}
.crown-one div:nth-child(2) {
  width: 1rem;
  height: 0.2rem;
  color: white;
  font-size: 0.13rem;
  text-align: center;
}
.crown-one div:nth-child(3) {
  width: 1rem;
  height: 0.25rem;
  color: gray;
  text-align: center;
  line-height: 0.25rem;
}
.crown-one div:nth-child(4) {
  width: 1rem;
  height: 0.25rem;
  color: gray;
  text-align: center;
  line-height: 0.25rem;
}

.crown-two div:nth-child(1) {
  width: 1rem;
  height: 1rem;
  background-image: url(../../../public/assets/Jin/su-113.png);
  background-size: 100% 100%;
  text-align: center;
  line-height: 1.91rem;
}
.crown-two div:nth-child(1) img {
  margin-left: 0.03rem;
  width: 90%;
  height: 90%;
}
.crown-two div:nth-child(2) {
  width: 1rem;
  height: 0.2rem;
  color: white;
  font-size: 0.13rem;
  text-align: center;
}
.crown-two div:nth-child(3) {
  width: 1rem;
  height: 0.25rem;
  color: gray;
  text-align: center;
  line-height: 0.25rem;
}
.crown-two div:nth-child(4) {
  width: 1rem;
  height: 0.25rem;
  color: gray;
  text-align: center;
  line-height: 0.25rem;
}

.crown-three div:nth-child(1) {
  width: 1rem;
  height: 1rem;
  background-image: url(../../../public/assets/Jin/su-114.png);
  background-size: 100% 100%;
  text-align: center;
  line-height: 1.91rem;
}
.crown-three div:nth-child(1) img {
  margin-left: 0.02rem;
  width: 90%;
  height: 90%;
}
.crown-three div:nth-child(2) {
  width: 1rem;
  height: 0.2rem;
  color: white;
  font-size: 0.13rem;
  text-align: center;
}
.crown-three div:nth-child(3) {
  width: 1rem;
  height: 0.25rem;
  color: gray;
  text-align: center;
  line-height: 0.25rem;
}
.crown-three div:nth-child(4) {
  width: 1rem;
  height: 0.25rem;
  color: gray;
  text-align: center;
  line-height: 0.25rem;
}
.footer {
  width: 2.5rem;
  height: 1.2rem;
  margin-left: 0.65rem;
  margin-top: 1.15rem;
}
.footer-one {
  width: 2.5rem;
  height: 0.1rem;
  border-bottom: 0.01rem solid gray;
}
.footer-one p {
  display: inline-block;
  width: 0.9rem;
  text-align: center;
  line-height: 0.2rem;
  position: absolute;
  top: 5.43rem;
  left: 1.45rem;
  height: 0.2rem;
  background-color: #181319;
  font-size: 0.1rem;
  color: gray;
}
.footer-two {
  width: 2.5rem;
  height: 0.85rem;
  margin-top: 0.25rem;
  display: flex;
  justify-content: space-between;
}
.footer-two div:nth-child(1) {
  width: 1rem;
  height: 0.85rem;
  line-height: 0.2rem;
}
.footer-two div:nth-child(1) p {
  font-size: 0.14rem;
  color: white;
  padding-left: 0.07rem;
}
.footer-two div:nth-child(2) p {
  font-size: 0.14rem;
  color: white;
}
.footer-two div:nth-child(2) {
  width: 1rem;
  height: 0.85rem;
  text-align: right;
  line-height: 0.2rem;
}
.icon2 {
  width: 0.4rem;
  height: 0.4rem;
}
.icon3 {
  width: 0.35rem;
  height: 0.35rem;
}
</style>