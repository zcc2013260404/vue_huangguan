<template>
  <div class="box" v-if="data">
    <DataHeader :data="title.user" :click="change"/>
    <HeadPortrait :data="data.userimage"
                  :change="handleFile" />
    <Name :userid="data.username"
          :data="title.name" />
    <Gender :data="data.sex"  @sex="sexchange"/>
    <Birthday :birData="birData"
              :data="data.birth"
              :change="handleToGetValue"
              :click="getValue"
              :showPopup="showPopup"
              :Del="Del" />
    <Signature :autograph="data.autograph"
               :data="title.Autograph" />
  </div>
</template>

<script>
import DataHeader from "./DataHeader";
import HeadPortrait from "./HeadPortrait";
import Name from "./Name";
import Gender from "./Gender";
import Birthday from "./Birthday";
import Signature from "./Signature";
import { Overlay } from 'vant';
import NamePage from "./NamePage";
import AutographPage from "./AutographPage";
import DataApi from "../../../apis/data/DataApi";
import { mapGetters } from "vuex"
export default {
  name: "DataPage",
  components: {
    DataHeader,
    HeadPortrait,
    Name,
    Gender,
    Birthday,
    Signature,
    Overlay,
    NamePage,
    AutographPage
  },
  data () {
    return {
      updatasex:'男',
      title: {
        user: "编辑资料",
        name: "昵称",
        Autograph: "签名"
      },
      birData: {
        bir: [],
        height: 30,
        show: false,
        minDate: new Date(1980, 1, 1),
        currentDate: new Date(),
        birth: "1998-0-0"
      },
      nameFlag: false
    }
  },
  methods: {
    sexchange(a){
      // console.log(a)
      this.$store.dispatch('INITSEX',a)
      this.updatasex = a
    },
    getValue () {
      console.log(this.birData.bir.join("-"))
      let birth = this.birData.bir.join("-")
      this.$store.dispatch('UPDATE_BIR', birth)
      // this.$store.state.data.birth = birth
      this.birData.show = false;
    },
    handleToGetValue (value) {
      this.birData.bir = value.getValues()
    },
    showPopup () {
      this.birData.show = true;
    },
    Del () {
      this.birData.show = false;
    },
    // 将头像显示
    handleFile: function (e) {
      let $target = e.target
      let file = $target.files[0]
      var reader = new FileReader()
      reader.onload = (data) => {
        let res = data.target
        this.data.userimage = res.result
      }
      reader.readAsDataURL(file)
    },
    async change(){
      let sex = "";
      // console.log(this.data.data.sex)
      if(this.updatasex === "男" ){
        sex = "#iconnan1"
      } else {
        sex = "#iconnv1"
      }
      let res = await DataApi.getDataInfo(this.token,this.data.username,this.data.userimage,sex,this.data.birth,this.data.autograph)
      console.log(res);
      if(res.status === 0){
        console.log(res.msg)
      }
    }
  },
  computed: {
    ...mapGetters({
      data:"GETDATA",
      token:"GET_TOKEN"
    })
  },
  beforeMount() {
    this.$store.dispatch('INITDATA',this.token)
    // this.updatasex = this.data.data.sex
    // console.log(this.data.data)
  },
  mounted() {
    console.log(this.$store.state.data.birth)
  }
}
</script>

<style scoped>
</style>