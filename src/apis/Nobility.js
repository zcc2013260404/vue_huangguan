export default {
    async getvip (userid,vip) {
      let res = await fetch('http://39.98.126.184:8080/api/getvip', {
          method:"POST",
          headers:{
              "Content-Type":"application/json;charset:UTF-8"
          },
          body:JSON.stringify({
              "token":"ODg1Nzk2NmIyOGFiNGQ1Mjk4ZTEwMjY0NDhlNjBhMzI=",
	            "getvip":vip
          })
      })
      return await res.json()
    },
  }