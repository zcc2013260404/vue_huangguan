<template>
    <div class="next">
        <div class="next-a">
            <div class="next-s">
                <div></div>
                <p>提现说明</p>
            </div>
            <div class="next-d">
                <p>需加入家族才可提现，具体提现问题请咨询客服微信:YTZBKF007</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"EarningsNext"
}
</script>

<style lang="scss" scoped>
    .next{
        width: 100vw;
        height: 2rem;
        margin-top: 0.2rem;
    }
    .next-a{
        width: 3.35rem;
        height: 2rem;
        margin-left: 0.2rem;
        margin-right: 0.2rem;
    }
    .next-s{
        width: 3.35rem;
        height: 0.25rem;
        display: flex;
    }
    .next-s div{
        width: 0.07rem;
        height: 0.25rem;
        background-color: black;
    }
    .next-s p{
        font-size: 0.16rem;
        line-height: 0.25rem;
        margin-left: 0.1rem;
    }
    .next-d{
        width: 3.35rem;
        height: 1rem;
        margin-top: 0.2rem;
    }
    .next-d p{
        font-size: 0.14rem;
        line-height: 0.2rem;
    }
</style>