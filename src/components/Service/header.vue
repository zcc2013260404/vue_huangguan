<template>
  <div class="header">
       <a @click="$router.back(-1)">
       <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarrow-left"></use>
        </svg>
        <span class="fan">返回</span>
        </a>
        <span class="rabeer">悦兔为你服务</span>
  </div>
</template>

<script>
export default {
    name:"s-header"
}
</script>

<style lang="scss" scoped>
    .header{
        width: 100vw;
        height: 0.5rem;
        background-color: #0CCECE;
        display: flex;
        align-items: center;
    }
    .icon{
        width: 0.25rem;
        height: 0.25rem;
        vertical-align: middle;
    }
    .fan{
        display: inline-block;
        font-size: 0.16rem;
        padding-left: 0.05rem;
        color: white;
        vertical-align: middle;
    }
    .rabeer{
        font-size: 0.16rem;
        padding-left: 0.8rem;
        font-weight: bold;
        color: white;
    }
</style>