<template>
  <router-link tag="span" to="/rank">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#iconjiangbei"></use>
    </svg>
  </router-link>
</template>

<script>
  export default {
    name: "HomeRank"
  }
</script>

<style lang="scss" scoped>
  .icon{
    padding-top: 0.03rem;
    width: 0.4rem;
    height: 0.3rem;
  }
</style>