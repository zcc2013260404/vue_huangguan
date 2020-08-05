<template>
  <ul class="watchList">
    <li :key="index" v-for="(item,index) in data">
      <p><a class="userimage" @click="goLiveRoom(item.studiono)"><img :src=item.userimage alt="推荐关注列表" /></a></p>
      <p>{{item.username}}</p>
      <p>
        <i>
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icondingwei2"></use></svg>
        </i>
        {{item.location}}
      </p>
      <span class="home-button" @click="getFollow(item.userid)">关注</span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "HomeRecommendList",
    props:["data","getFollow","goLiveRoom"]
  }
</script>

<style lang="scss" scoped>
.watchList{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 0.1rem;
  box-sizing: border-box;
  justify-content: space-between;
  li{
    box-sizing: border-box;
    width: 32%;
    text-align: center;
    margin:0 0.01rem 0.06rem;
    background: #f6f6f6;
    padding: 0.1rem 0.15rem;
    .userimage{
      text-decoration: none;
      display: inline-block;
      width: 0.6rem;
      height: 0.6rem;
  }
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    p{
      margin-bottom: 0.1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .icon{
      width: 0.15rem;
      height: 0.15rem;
      vertical-align: middle;
      margin-right: 0.05rem;
    }
    .home-button{
      display: inline-block;
      border-radius: 0.5rem;
      background: #5ee4d9;
      padding: 0.05rem 0.3rem;
      color: #fff;
    }
  }
}
</style>