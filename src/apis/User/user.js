const BASEURL = "http://39.98.126.184:8080/api";
export default {
    async getUserdata (id) {
      let param = '';
      console.log(id.length)
      if (id.length >= 10){
        param = `token=${id}`
      } else {
        param = `userid=${id}`
      }
      let res = await fetch(`${BASEURL}/see_user?${param}`);
      return await res.json();
    },
  }