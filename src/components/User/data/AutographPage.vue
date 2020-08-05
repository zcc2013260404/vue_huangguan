<template>
    <div class="box">
        <DataHeader :data="this.$route.params.data" />
        <input type="text" v-model="userAutograph" class="txt" @input="upDataAutograph">
    </div>
</template>

<script>
    import DataHeader from "./DataHeader";
    export default {
        name: "AutographPage",
        components: {
            DataHeader
        },
        data(){
            return {
                userAutograph:''
            }
        },
        methods: {
            upDataAutograph(){
                // return this.$store.state.this.data.data.userid
                this.$store.dispatch('INITAUTOGRAPH',this.userAutograph)
            }
        }
    }
</script>

<style scoped>
    .txt{
        width: 100vw;
        height: 0.5rem;
        margin-top: 0.03rem;
        border: none;
        padding-left: 0.1rem;
        box-sizing: border-box;
        font-size: 0.16rem;
        /*color: #aaa;*/
    }
</style>