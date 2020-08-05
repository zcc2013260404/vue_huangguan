<template>
  <div>
    <Award-header></Award-header>
    <Award-content></Award-content>
  </div>
</template>

<script>
import header from "../../components/User/Award/awardHeader"
import content from "../../components/User/Award/awardConder"
  export default {
    name: "Award",
    components:{
      "Award-header":header,
      "Award-content":content
    }
  }
</script>

<style scoped>

</style>