export default{
  state: {
    slideIndex:0,
  },
  mutations: {
    'MY_SLIDE': (state, i) => {
      state.slideIndex = i;
    }
  },
  actions: {
    'GET_SLIDE_INDEX': async ({ commit },i) => {
      commit('MY_SLIDE', i)
    },
  },
  getters: {
    'GET_SLIDE': ({ slideIndex }) => {
      return slideIndex
    }
  }
}
