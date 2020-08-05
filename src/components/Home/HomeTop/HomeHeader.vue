<template>
  <div class="home-header">
    <HomeSearch/>
    <HomeRank/>
  </div>
</template>

<script>
  import HomeSearch from "../HomeHeader/HomeSearch";
  import HomeRank from "../HomeHeader/HomeRank";
  export default {
    name: "home-header",
    components:{
      HomeSearch,
      HomeRank
    }
  }
</script>

<style lang="scss" scoped>
.home-header{
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  height:0.5rem;
  line-height: 0.5rem;
  border-bottom: 0.005rem solid #eee;
  width: 100%;
  background: #fff;
  font-size: 0.14rem;
  z-index: 2;
}
</style>