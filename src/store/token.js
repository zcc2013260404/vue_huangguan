export default{
  state: {
    token:window.localStorage.getItem('token'),
  },
  getters: {
    'GET_TOKEN': ({ token }) => {
      return token
    }
  }
}