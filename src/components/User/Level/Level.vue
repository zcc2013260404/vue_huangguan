<template>
    <div class="cover">
        <div class="top">
            <router-link :to="'/user'">
                <svg class="righter" aria-hidden="true">
                    <use xlink:href="#iconfanhui"></use>
                </svg>
            </router-link>
            <p class="lv">等级</p>
        </div>
        <div class="next">
            <div>
                <img src="http://123.57.233.41:4000/images/2.jpg" alt="">
            </div>
            <div>
                <img src="http://123.57.233.41:4000/images/s-113.png" alt="">
            </div>
        </div>
        <div class="experience">
            <div>
                <p>当前经验值:0</p>
                <p>距升级还有:10</p>
            </div>
            <div></div>
        </div>
        <div class="equity">
            <div>
                <div></div>
                <p>等级权益</p>
            </div>
            <div>
                1.不同等级的用户拥有不同的等级图标，高级用户更显尊贵
            </div>
            <div>
                2.高等级用哪个户在直播间排名更靠前
            </div>
            <div>
                <div></div>
                <p>如何升级</p>
            </div>
            <div>
                1.通过充值金币，积分兑换金币，赠送金币等活动均可获得升级经验
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Level"
}
</script>

<style lang="scss" scoped>
    .cover{
        width: 100vw;
        height: 100vh;
        background-image: url("http://123.57.233.41:4000/images/Earnings_backgroundImg.jpg");
        background-size: 100% 100%;
    }
    .top{
        width: 100vw;
        height: 0.5rem;
        display: flex;
        align-items: center;
        display: flex;
    }
    .righter{
        width: 0.3rem;
        height: 0.3rem;
        padding-left: 0.1rem;
    }
    .lv{
        font-size: 0.16rem;
        color: #E1C192;
        margin-left: 1.4rem;
    }
    .next div:nth-child(1){
        width: 0.7rem;
        height: 0.7rem;
        position: absolute;
        top: 0.7rem;
        left: 1.6rem;
        font-size: 0;
    }
    .next div:nth-child(1) img{
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 50%;
    }
    .next div:nth-child(2){
        width: 100vw;
        height: 0.7rem;
        position: absolute;
        top: 1.4rem;
    }
    .next div:nth-child(2) img{
        width: 60%;
        margin-left: 0.8rem;
        margin-top: 0.1rem;
    }
    .experience{
        width: 100vw;
        height: 0.5rem;
        position: absolute;
        top: 2rem;
    }
    .experience div:nth-child(1){
        width: 3.15rem;
        height: 0.3rem;
        display: flex;
        justify-content: space-between;
        padding-left: 0.3rem;
        padding-right: 0.3rem;
    }
    .experience div:nth-child(1) p{
        color: white;
    }
    .experience div:nth-child(2){
        margin-left: 0.3rem;
        width: 3.15rem;
        height: 0.1rem;
        border-radius: 0.15rem;
        background-color: white;
    }
    .equity{
        width: 100vw;
        height: 3rem;
        position: absolute;
        top: 2.55rem;
    }
    .equity div:nth-child(1){
        width: 100vw;
        height: 0.75rem;
        font-size: 0;
        display: flex;
    }
    .equity div:nth-child(1) div{
        width: 0.05rem;
        height: 0.5rem;
        margin-left: 0.1rem;
        background-color: #E1C192;
    }
    .equity div:nth-child(1) p{
        font-size: 0.16rem;
        color: #E1C192;
        line-height: 0.5rem;
        margin-left: 0.1rem;
    }
    .equity div:nth-child(2){
        width: 3.35rem;
        height: 0.5rem;
        padding-left: 0.2rem;
        padding-right: 0.2rem;
        font-size: 0.14rem;
        line-height: 0.2rem;
        color: white;
    }
    .equity div:nth-child(3){
        width: 3.35rem;
        height: 0.5rem;
        padding-left: 0.2rem;
        padding-right: 0.2rem;
        font-size: 0.14rem;
        color: white;
    }
    .equity div:nth-child(4){
        width: 100vw;
        height: 0.75rem;
        display: flex;
    }
    .equity div:nth-child(4) div{
        width: 0.05rem;
        height: 0.5rem;
        margin-left: 0.1rem;
        background-color: #E1C192;
    }
    .equity div:nth-child(4) p{
        font-size: 0.16rem;
        color: #E1C192;
        line-height: 0.5rem;
        margin-left: 0.1rem;
    }
    .equity div:nth-child(5){
        width: 3.35rem;
        height: 0.5rem;
        padding-left: 0.2rem;
        padding-right: 0.2rem;
        font-size: 0.14rem;
        color: white;
        line-height: 0.2rem;
    }
</style>