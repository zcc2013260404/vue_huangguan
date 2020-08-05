<template>
  <div class="box">
    <message />
  </div>
</template>

<script>
import message from "../../components/User/Message/message";
export default {
  name: "Message",
  components: {
    message
  }
}
</script>

<style scoped>
.box {
  background: #efefef;
  height: 100vh;
}
</style>