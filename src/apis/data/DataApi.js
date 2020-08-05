export default {
    async getDataInfo (token,username,userimage,sex,birth,autograph) {
        // console.log(token,username,userimage,sex,birth,autograph)
        let res = await fetch('http://39.98.126.184:8080/api/edit', {
            method:"POST",
            headers:{
                "Content-Type":"application/json;charset:UTF-8"
            },
            body:JSON.stringify({
                "token":token,
                "username": username,
                "userimage":userimage,
                "sex":sex,
                "birth":birth,
                "autograph":autograph
            })
        })
        return await res.json()
    },

}