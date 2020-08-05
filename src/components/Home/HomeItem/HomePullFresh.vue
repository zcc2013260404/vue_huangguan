<template>
    <PullRefresh v-model="isLoading" @refresh="onRefresh"></PullRefresh>
</template>

<script>
  import { PullRefresh } from 'vant';
  export default {
    name: "HomePullFresh",
    components:{
      PullRefresh,
    },
    data() {
      return {
        isLoading: false
      }
    },
    methods: {
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isLoading = false;
        }, 500);
      }
    }
  }
</script>

<style scoped>

</style>