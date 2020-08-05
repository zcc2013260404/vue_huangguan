<template>
  <p class="list-header">
    <span class="list-header-title">推荐关注</span>
    <span>
      <span @click="change(465123)">换一批</span>
      <i>
       <svg class="icon" aria-hidden="true">
      <use xlink:href="#iconhuanyipi"></use></svg>
      </i>
    </span>
  </p>
</template>

<script>
  export default {
    name: "HomeAttentionListHeader",
    props:["change"]
  }
</script>

<style lang="scss" scoped>
.list-header{
    display: flex;
    justify-content: space-between;
    padding:0 0.1rem;
  .icon{
    width: 0.2rem;
    height: 0.2rem;
    vertical-align: middle;
  }
  .list-header-title{
    font-size: 0.14rem;
    line-height: 0.2rem;
    font-weight: 900;
  }
}
</style>