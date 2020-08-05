<template>
  <router-link tag="span" to="/search">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icontubiao-"></use>
    </svg>
  </router-link>
</template>

<script>
  export default {
    name: "HomeSearch"
  }
</script>

<style lang="scss" scoped>
  .icon{
    width: 0.35rem;
    height: 0.4rem;
    padding-top:0.03rem;
  }
</style>