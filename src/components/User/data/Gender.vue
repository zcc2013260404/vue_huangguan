<template>
    <div>
        <div class="Gender" @click="show = true">
            <div class="Gender-title">性别</div>
            <span class="sex">{{data | getSex()}}</span>
        </div>
        <van-overlay :show="show" @click="show = false">
            <div class="wrapper" @click.stop="show = false">
                <div class="block"  @click="change">
                    <van-radio-group v-model="radio" icon-size="30px">
                        <van-radio name="男">
                            男<img slot="icon"
                                 slot-scope="props"
                                 :src="props.checked ? activeIcon : inactiveIcon"
                            >
                        </van-radio>
                        <van-radio name="女">
                            女<img slot="icon"
                                slot-scope="props"
                                :src="props.checked ? activeIcon1 : inactiveIcon1"
                            >
                        </van-radio>
                    </van-radio-group>
                </div>
            </div>
        </van-overlay>
    </div>
</template>

<script>
    import { Overlay, RadioGroup, Radio, Cell, CellGroup } from 'vant';
    export default {
        name: "Gender",
        props:["data"],
        components: {
            [Overlay.name]:Overlay,
            [RadioGroup.name]:RadioGroup,
            [Radio.name]:Radio,
            [Cell.name]:Cell,
            [CellGroup.name]:CellGroup
        },
        data() {
            return {
                show: false,
                radio: this.data,
                activeIcon: '/assets/xue/man.png',
                inactiveIcon: '/assets/xue/man1.png',
                activeIcon1: '/assets/xue/women.png',
                inactiveIcon1: '/assets/xue/women2.png'
            }
        },
        methods: {
            change(){
                // console.log(this.radio)
                this.$emit("sex",this.radio)
            }
        },
      filters:{
        // 总价的计算
        getSex(data){
          if (data === "#iconnv1"){
            data = "女"
          } else {
            data = "男"
          }
          return data
        }
      }
    }
</script>

<style scoped>
    .Gender{
        width: 100%;
        height: 0.45rem;
        background: white;
        margin-bottom: 0.01rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 0.1rem;
        box-sizing: border-box;
    }
    .sex{
        font-size: .18rem;
        color: #aaa;
    }
    .Gender-title{
        width: 0.65rem;
        height: 100%;
        font-size: 0.18rem;
        text-align: center;
        line-height: 0.45rem;
    }
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    .block {
        width: 1.8rem;
        height: 1.2rem;
        background-color: #fff;
        border-radius: 0.1rem;
    }
    .man{
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .manLift{
        width: 1rem;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .manRight{
        width: 0.3rem;
        height: 0.3rem;
        background: white;
        margin-right: 0.2rem;
    }
    .manLift-icon{
        width: 0.3rem;
        height: 0.3rem;
    }
    .SpanSex{
        font-size: 0.16rem;
    }
    .icon{
        width: 100%;
        height: 100%;
    }
    .woman{
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .womanLift{
        width: 1rem;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .womanRight{
        width: 0.3rem;
        height: 0.3rem;
        background: white;
        margin-right: 0.2rem;
    }
    .womanLift-icon{
        width: 0.3rem;
        height: 0.3rem;
    }




    .van-radio{
        height: 0.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.18rem;
    }
    .van-radio__icon img{
        width: 0.3rem;
        padding-right: 0.4rem;
    }
</style>