<template>
    <div class="box">
        <DataHeader :data="this.$route.params.data" />
        <input type="text" v-model="data" class="txt" @input="upDataName">
    </div>
</template>

<script>
    import DataHeader from "./DataHeader";
    export default {
        name: "NamePage",
        props:["userid"],
        data(){
          return {
              username: ''
          }
        },
        components: {
            DataHeader
        },
        methods: {
            upDataName(){
                // return this.$store.state.this.data.data.userid
                this.$store.dispatch('INITNAME',this.username)
            }
        }
    }
</script>

<style scoped>
    .txt{
        width: 100vw;
        height: 0.35rem;
        margin-top: 0.03rem;
        border: none;
        padding-left: 0.1rem;
        box-sizing: border-box;
        font-size: 0.16rem;
        /*color: #aaa;*/
    }
</style>