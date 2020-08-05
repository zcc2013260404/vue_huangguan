<template>
    <div>
      <set-header></set-header>
    </div>
</template>

<script>
  import setheader from "../../components/User/Set/SetHeader"
  export default {
    name: "Setting",
    data(){
    return {
    registration_data:{
      pwdType:"password",
      src:"../../../../../../public/assets/xue/p1.png"
    }
   }
  },
    components:{
      "set-header":setheader,
    }
  }
</script>

<style scoped>

</style>