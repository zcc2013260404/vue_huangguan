
export default {
  async getSearchData (userid,s_id) {
	console.log("搜索"+s_id)
    let res = await fetch("http://39.98.126.184:8080/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
				"token":userid,
				"s_userid": s_id
			})
    })
    return await res.json()
  },
  async getData (id) {
    let res = await fetch("http://39.98.126.184:8080/api/feel/intereted", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
						"token":id
      })
    })
    return await res.json()
  },
	
	async focus (userid,id) {
	  let res = await fetch("http://39.98.126.184:8080/api/feel/onclick" ,
	  {
	    method: "POST",
	    headers: {
	      "Content-Type": "application/json;charset=UTF-8"
	    },
	    body: JSON.stringify({
				"token":userid,
				"attentionid":id		
	    })
	  }
	  )
	  return await res.json()
	},
}
