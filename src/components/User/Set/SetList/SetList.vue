<template>
  <div class="SetList">
            <ul class="setlist-ul">
                <router-link :to="'/user/setter/changepassword'" tag="div">
                <li>
                    <div><p>修改密码</p></div>
                    <div>
                        <svg class="icon" aria-hidden="true">
                           <use xlink:href="#iconjiantou"></use>
                        </svg>
                    </div>
                </li>
                </router-link>
                <router-link :to="'/user/setter/opinion'" tag="div">
                <li>
                    <div><p>意见反馈</p></div>
                    <div>
                        <svg class="icon" aria-hidden="true">
                           <use xlink:href="#iconjiantou"></use>
                        </svg>
                    </div>
                </li>
                </router-link>
                <router-link :to="'/user/setter/ContactUS'" tag="div">
                <li>
                    <div><p>联系我们</p></div>
                    <div>
                        <svg class="icon" aria-hidden="true">
                           <use xlink:href="#iconjiantou"></use>
                        </svg>
                    </div>
                </li>
                </router-link>
                <router-link :to="'/user/setter/agreement'" tag="div">
                <li>
                    <div><p>用户注册协议</p></div>
                    <div>
                        <svg class="icon" aria-hidden="true">
                           <use xlink:href="#iconjiantou"></use>
                        </svg>
                    </div>
                </li>
                </router-link>
                <router-link :to="'/user/setter/privacy'" tag="div">
                <li>
                    <div><p>用户隐私协议</p></div>
                    <div>
                        <svg class="icon" aria-hidden="true">
                           <use xlink:href="#iconjiantou"></use>
                        </svg>
                    </div>
                </li>
                 </router-link>               
            </ul>
            <div class="SetList-1">
                <div class="set-ceche">
                    <div>清楚缓存</div>
                    <div class="ccc">12.8MB</div>
                </div>
                <div class="set-versions">
                    <div>检查版本</div>
                    <div class="ccc">2.2.5</div>
                </div>
                <div class="set-write">
                    <div>注销账号</div>
                    <div class="ccc"></div>
                </div>           
            </div>
    </div>
</template>

<script>
export default {
    name:"SetList"
}
</script>

<style  lang="scss" scoped>
    .setlist-ul{
        width: 100%;
        height: 2.51rem;
        background-color: white;
        font-size: 0;
        li{
            width: 100%;
            height: 0.5rem;
            font-size: 0.16rem;
            display: flex;
            justify-content: space-around;
            p{
                width: 2.7rem;
                line-height: 0.5rem;
            }
            svg{
                width: 0.16rem;
                height: 0.16rem;
                margin-top: 0.22rem;
            }
        }
    }
    .SetList-1{
        width: 100%;
        height: 1.5rem;
        background-color: white;
        margin: 0.1rem 0;
        font-size: 0;
        .set-ceche{
            width: 100%;
            height: 0.5rem;
            font-size: 0.16rem;
            font-weight: 500;
            display: flex;
            justify-content: space-around;
            line-height: 0.5rem;
            .ccc{
            width: 2.2rem;
            text-align: right;
            font-weight: 500;
            color: gray;
            }
        }
        .set-versions{
            width: 100%;
            height: 0.5rem;
            font-size: 0.16rem;
            font-weight: 500;
            display: flex;
            justify-content: space-around;
            line-height: 0.5rem;
            .ccc{
            width: 2.15rem;
            text-align: right;
            font-weight: 500;
            color: gray;
            }
        }
        .set-write{
            width: 100%;
            height: 0.5rem;
            font-size: 0.16rem;
            font-weight: 500;
            display: flex;
            justify-content: space-around;
            line-height: 0.5rem;
            .ccc{
            width: 2.15rem;
            text-align: right;
            }
        }   
    }
</style>