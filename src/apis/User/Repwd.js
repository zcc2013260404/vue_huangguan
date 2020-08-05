const BASEURL = "http://39.98.126.184:8080/api";
export default {
    async getCode (tel) {
        let res = await fetch(`${BASEURL}/change/send_code?phone=${tel}`)
        return await res.json()
    },
    async getRepwd (a,b,c) {
      let res=await fetch(`${BASEURL}/change/password`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                "password":a,
                "phone":b,
                "code":c
            })
        });
        return await res.json()
    },

}