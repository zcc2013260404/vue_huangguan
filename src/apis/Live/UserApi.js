
export default {
    async getUserData (userid,stu) {
        let res = await fetch('http://39.98.126.184:8080/api/in_room',{
            method:"POST",
            headers:{
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                "token":userid,
                "studiono":stu,
            })
        })
        return await res.json()

    },
}
