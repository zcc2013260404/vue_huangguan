<template>
    <div class="contact">
        <div class="contact-top">
            <router-link :to="'/user/setting'">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconarrow-left"></use>
            </svg>
            </router-link>
            <h5>联系我们</h5>
        </div>
        <div class="content">
            <div>
                <h3>家族添加客服微信</h3>
                <p>DL1399194789</p>
            </div>
            <div>
                <h3>客服QQ</h3>
                <p>88888888</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:"ContactUS"
}
</script>

<style lang="scss" scoped>
  .contact{
        width: 100%;
        height: 100%;
      }
    .contact-top{
        width:100%;
        height:0.5rem;
        background-color: #0F121B;
        font-size: 0;
        display: flex;
        svg{
            width: 0.3rem;
            height: 0.2rem;
            margin-top: 0.15rem;
            margin-left: 0.1rem;
        }
        h5{
            color: white;
            font-size: 0.18rem;
            margin-left: 0.2rem;
            margin-top: 0.17rem;
            font-weight: 100;
        }   
    }
    .content{
      div{
        width: 3rem;
        height: 1.5rem;
        background-color: #EBFDFF;
        margin-top: 0.1rem;
        margin-left: auto;
        margin-right: auto;
        h3{
          font-size: 0.2rem;
          font-weight: bold;
          text-align: center;
          line-height: 1rem;
        }
        p{
          font-size: 0.15rem;
          text-align: center;
          margin-top: -0.1rem;
        }
      }
    }
</style>