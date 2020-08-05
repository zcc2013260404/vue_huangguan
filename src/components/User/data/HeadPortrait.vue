<template>
  <div class="portrait"
       @click.stop="uploadHeadImg">
    <div class="portrait-title">头像</div>
    <div class="portrait-pic">
      <img :src="data"
           alt="">
    </div>
    <input type="file"
           @change="change"
           class="hiddenInput" />
  </div>
</template>

<script>
export default {
  name: "HeadPortrait",
  props: ["data", "change"],
  methods: {
    // 打开图片上传
    uploadHeadImg: function () {
      this.$el.querySelector('.hiddenInput').click()
    }
  }
}
</script>

<style scoped>
.portrait {
  width: 100%;
  height: 1rem;
  background: white;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.1rem;
}
.portrait-title {
  width: 0.65rem;
  height: 100%;
  /*background: red;*/
  font-size: 0.18rem;
  text-align: center;
  line-height: 1rem;
}
.portrait-pic {
  width: 1rem;
  height: 100%;
  /*background: red;*/
  font-size: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.portrait-pic img {
  width: 60%;
  height: 60%;
  border-radius: 50%;
}
.hiddenInput {
  display: none;
}
</style>