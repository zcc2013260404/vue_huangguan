<template>
    <div class="yt-content">
        <div class="yt-content1" ref="a">
            <ul ref="val">
                <li class="left">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#iconrobot"></use>
                    </svg>
                    <span>您好，悦兔在线为您服务！</span>
                </li>
           </ul>
        </div>
        <div class="btn">
            <input type="text" v-model="value">
            <button @click="_send">发送</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"s-content",
    data(){
        return{
            value:" ",
            msg:" "
        }
    },
    methods:{
        _send(){
           if(this.value !==""){
                let usermsg = document.createElement("li");
                usermsg.innerHTML =  ` <li class="right">
                        <span>${this.value}</span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icontouxiang"></use>
                        </svg>
                    </li>`
                this.$refs.val.appendChild(usermsg);
                this.value = "";  
                this.$refs.a.scrollTop = this.$refs.a.scrollHeight;
                // 后端获取值

                fetch("./autoTalk.php",{
                    method:"POST",
                    mode:'no-cors',
                    headers:{
                        "Content-Type": "application/json;charset=UTF-8"
                    },
                    body: JSON.stringify({
                        "text":this.value
                    })
                }).then(res => {
                    res.json().then(data => {
                      console.log(data)
                    })
                })
            
                // let robotmsg = document.createElement("li");
                // robotmsg.innerHTML =  `<li class="left">
                //     <svg class="icon" aria-hidden="true">
                //         <use xlink:href="#iconrobot"></use>
                //     </svg>
                //     <span>亲，客服小悦兔正在维修哦！</span>
                // </li>`
                // setTimeout(()=>{
                //     this.$refs.val.appendChild(robotmsg); 
                // },1000)           
            }
        }
    }
}
</script>

<style lang="scss">
    .yt-content{
        width: 100%;
        height:6.17rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        .yt-content1{
            width: 100%;
            flex: 1;
            border-bottom: 0.01rem solid #ccc;
            overflow: auto;
            .left,.right{
                margin-left: 0.05rem;
                margin-top: 0.05rem;
                svg{
                width: 0.45rem;
                height: 0.45rem;
                // background-color: red;
                border-radius: 1rem;
                vertical-align: middle;
                }
                span{
                font-size: 0.16rem;
                vertical-align: middle;
                background-color: aqua;
                max-width: 2.2rem;
                height: 0.3rem;
                display: inline-block;
                text-align: center;
                line-height: 0.3rem;
                margin: 0.05rem;
                padding: 0rem 0.1rem;
                border-radius: 0.08rem;
                }
            }
            .right{
                text-align: right;
                margin-right: 0.05rem;
            }
            
        }
        .btn{
            width: 100%;
            height: 0.4rem;
            input{
                width: 3rem;
                height: 100%;
                border: none;
                outline: none;
                padding:0rem 0.1rem;
                box-sizing: border-box;  // 盒子大小禁止变形
            }
            button{
                width: 0.748rem;
                height: 0.4rem;
                border: none;
                outline: none;
            }
        }
    }
</style>