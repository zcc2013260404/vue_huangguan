<template>
    <div>
      <yt-s-header></yt-s-header>
      <yt-s-content></yt-s-content>
    </div>
</template>

<script>
import header from "../../components/Service/header"
import content from "../../components/Service/content"
  export default {
    name: "Service",
    components:{
      "yt-s-header":header,
      "yt-s-content":content
    }
  }
</script>

<style scoped>

</style>