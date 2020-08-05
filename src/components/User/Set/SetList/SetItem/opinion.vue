e<template>
  <div class="set-opinio">
      <div class="set-opinio-top">
        <router-link :to="'/user/setting'">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarrow-left"></use>
        </svg>
        </router-link>
        <h3>意见反馈</h3>
        <p @click="sss">发送</p>
      </div>
      <div class="content">
        <input type="text" placeholder="请留下您的微信/QQ/手机号">
        <textarea name="" id="" cols="30" rows="10" placeholder="请写下您的意见或者建议">
        </textarea>
      </div>
  </div>
</template>

<script>
export default {
  name:"opinio",
  methods:{
    sss(){
      
    }
  }
}
</script>

<style scoped lang="scss">
  .set-opinio{
        width: 100%;
        height: 100vh;
        background-color: #EFEFEF;
        overflow: hidden;
      }
    .set-opinio-top{
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
        h3{
            color: white;
            font-size: 0.18rem;
            margin-left: 0.2rem;
            margin-top: 0.15rem;
        }
        p{
          font-size: 0.14rem;
          color: white;
          width: 2.2rem;
          height:0.5rem;
          text-align: right;
          line-height: 0.5rem;
        }
    }
    .content{
      input{
        display: block;
        width: 100%;
        height: 0.4rem;
        margin: 0.1rem 0;
        border:none;
        outline: none;
        padding-left: 0.1rem;
      }
      textarea{
        width: 100%;
        height: 2rem;
        border:none;
        outline: none;
        padding-left: 0.1rem;
      }
    }
</style>