
export default {
  async getRankData () {
    let res = await fetch('http://39.98.126.184:8080/api/Bang/bang')
    let data = await res.json()
		console.log(data)
    return data
  },

}
