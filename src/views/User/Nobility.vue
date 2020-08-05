<template>
    <div>
    <NobilityHeader/>
    <yt-NobilityContent></yt-NobilityContent>
    </div>
</template>

<script>
import NobilityHeader from "../../components/User/Nobility/NHeader"
import NobilityContent from "../../components/User/Nobility/NContent"
  export default {
    name:"Nobility",
    components:{
      NobilityHeader,
      "yt-NobilityContent":NobilityContent
    }
  }
</script>

<style scoped lang="scss">
    
</style>