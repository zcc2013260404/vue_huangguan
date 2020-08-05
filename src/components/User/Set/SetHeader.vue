<template>
 <div>
      <div class="Set">
        <div class="set-top">
        <router-link :to="'/user'">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarrow-left"></use>
        </svg>
        </router-link>
        <h3>设置</h3>
        </div>
        <yt-setList></yt-setList>
        <div class="setfooter">
            <div class="setfooter-1">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icontuichu"></use>
                </svg>
                <p @click="tuichu">退出登录</p>
            </div>
        </div>
    </div>
 </div>
</template>

<script>
import stelist from "./SetList/SetList"
import { Dialog } from 'vant';
export default {
    name:"SetHeader",
    components:{
        "yt-setList":stelist,
        [Dialog.name]:Dialog
    },
    methods:{
        tuichu(){
            Dialog.confirm({
            message: '是否确定退出'
            }).then(() => {
            window.localStorage.clear()
            }).catch(() => {

            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .Set{
        width: 100%;
        height: 100vh;
        background-color: #EFEFEF;
      }
    .set-top{
        width:100%;
        height:0.5rem;
        background-color: #0F121B;
        font-size: 0;
        display: flex;
        svg{
            width: 0.3rem;
            height: 0.2rem;
            margin-top: 0.15rem;
            margin-left: 0.1rem;
        }
        h3{
            color: white;
            font-size: 0.2rem;
            margin-left: 0.2rem;
            margin-top: 0.15rem;
        }   
    }
    .setfooter{
        width: 100%;
        height: 0.53rem;
        background-color: white;
        font-size: 0;
        .setfooter-1{
            width: 1.1rem;
            margin-left: auto;
            margin-right: auto;
        p{
            font-size: 0.18rem;
            // font-weight: 600;
            color: #0F121B;
            text-align: center;
            line-height: 0.53rem;
            display: inline-block;
            vertical-align:middle;
        }
        svg{
            width: 0.25rem;
            height: 0.25rem;
            display: inline-block;
            vertical-align:middle;
            margin-right: 0.1rem;
            }
        }
       
      }  
</style>