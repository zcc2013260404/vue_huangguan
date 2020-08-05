<template>
  <div class="content">
      <van-datetime-picker
        v-model="currentDate"
        type="date">
      </van-datetime-picker>
        <p>请选择时间</p>
  </div>
</template>

<script>
import { DatetimePicker } from 'vant';
export default {
    name:"awardConder",
    data(){
        return{
            currentDate: new Date()
        }
    },
    components:{
        [DatetimePicker.name]:DatetimePicker
    }
}
</script>

<style  scoped lang="scss">
    .content{
        width: 100%;
        height: 2.64rem;
        p{
           font-size: 0.18rem;
           text-align: center;
           margin-top: 0.1rem;
        }
    }
</style>