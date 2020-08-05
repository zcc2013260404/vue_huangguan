const BASEURL = "http://39.98.126.184:8080/api";
export default {
  //频道页面数据请求
  async getCctvLiveInfo () {
    let res = await fetch('http://123.57.233.41:3001/talents');
    return await res.json()
  },
  //关注页面请求
  async getAttentionInfo (id) {
    let res = await fetch(`${BASEURL}/Attention/attention`, {
      method:"POST",
      headers:{
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        "token":id
      })
    });
    return await res.json()
  },
  //才艺页面请求
  async getTalentsInfo (id) {
    let res = await fetch(`${BASEURL}/Attention/talent`,{
      method:"POST",
      headers:{
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        "token":id
      })
    });
    return await res.json()
  },
  //附近页面数据请求
  async getNearByInfo (id) {
    let res = await fetch(`${BASEURL}/Attention/near`,{
      method:"POST",
      headers:{
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        "token":id
      })
    });
    return await res.json()
  },
  //推荐页面数据请求
  async getRecommendInfo (id) {
    let res = await fetch(`${BASEURL}/Attention/recommend`,{
      method:"POST",
      headers:{
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        "token":id
      })
    });
    return await res.json()
  },
  //换一批数据请求
  async getChangeInfo (id) {
    let res = await fetch(`${BASEURL}/Attention/change`,{
      method:"POST",
      headers:{
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        "token":id
      })
    });
    return await res.json()
  },
  //点击关注数据接口
  async getFollow (id,attentionid) {
    let res = await fetch(`${BASEURL}/Attention/onclick`,{
      method:"POST",
      headers:{
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        "token":id,
        "attentionid":attentionid
      })
    });
    return await res.json()
  },
  //开播前的实名认证接口
  async getVerficationInfo (id) {
    let res = await fetch(`${BASEURL}/start/live?token=${id}`)
    return await res.json()
  },
  //开启视频直播的认证接口
  async getStartLiveInfo (id) {
    let res = await fetch(`${BASEURL}/live_room`, {
      method:"POST",
      headers:{
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        "token":id
      })
    });
    return await res.json()
  },
}