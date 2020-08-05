const LIVEURL = `http://123.57.233.41:3001/liveItem`;
export default {
  async getLiveItemById(id) {
    let res = await fetch(`${LIVEURL}/?id=${id}`);
    return await res.json();
  }
}
