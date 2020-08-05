

export default {
  async getmessageData (userid,stu,id) {
    console.log(userid,stu,id)
    let res = await fetch('http://39.98.126.184:8080/api/reward',{
      method:"POST",
      headers:{
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        "token":userid,
        "studiono":stu,
        "id":id
      })
    })
    return await res.json()

  },

}
