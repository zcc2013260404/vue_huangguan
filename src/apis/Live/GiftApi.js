
export default {
  async getGiftData () {
    let res = await fetch('http://39.98.126.184:8080/api/live/gift')
    return await res.json()
  },
}
