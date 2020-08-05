<template>
    <div>
      <Task-header></Task-header>
      <Task-content></Task-content>
    </div>
</template>

<script>
   import header from "../../components/User/Task/TaskHeader"
   import content from "../../components/User/Task/TaskContent"
  export default {
    name: "Task",
    components:{
      "Task-header":header,
      "Task-content":content
    }
  }
</script>

<style scoped>

</style>