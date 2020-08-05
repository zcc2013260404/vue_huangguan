<template>
    <div>
        <div class="Message_header">
            <div class="Left-icon" @click="$router.back(-1)">
                <svg class="icon bank" aria-hidden="true">
                    <use xlink:href="#iconarrow-left-copy"></use>
                </svg>
            </div>
            <span>系统公告</span>
        </div>
<!--        <van-notice-bar-->
<!--                :text=title-->
<!--                left-icon="volume-o"-->
<!--                background="#fff7cc"-->
<!--        />-->
        <!-- closeable 模式，在右侧显示关闭按钮 -->
        <van-notice-bar mode="closeable">
            {{title}}
        </van-notice-bar>

        <!-- link 模式，在右侧显示链接箭头 -->
        <van-notice-bar mode="link">
            {{text}}
        </van-notice-bar>
    </div>
</template>

<script>
    import { NoticeBar } from 'vant';
    export default {
        name: "message",
        components: {
            [NoticeBar.name]:NoticeBar
        },
        data(){
            return {
                title:"加油！加油！加油！努力！努力！努力！今天睡地板，明天当老板。一个月买车，两个月买房。",
                text:"实时音视频通话，丰富多彩的聊天方式，趣味相投的社区交友，免费定制app功能排版，免费定制app主题色，做不一样的'自己'。"
            }
        }
    }
</script>

<style scoped>
    .Message_header{
        width: 100%;
        height: 0.5rem;
        background: white;
        text-align: center;
        line-height: 0.5rem;
    }
    .Message_header span{
        font-size: 0.2rem;
        font-weight: 600;
    }
    .Left-icon{
        width: 0.3rem;
        height: 0.3rem;
        position: absolute;
        top: 0.1rem;
        left: 0.1rem;
    }
    .bank{
        width: 0.3rem;
        height: 0.3rem;
    }
</style>