import Vue from 'vue'
import Vuex from 'vuex'
import user from "../apis/User/user"
import home from "./home"
import data from "../apis/data/DataApi"
import token from "./token"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
    vip: ""
  },
  mutations: {
    'INIT': (state, a) => {
      state.data = a;
    },
    'VIPMU': (state, a) => {
      state.vip = a.toString();
      console.log(state.vip);
    },
    'GETNAME':(state,a) => {
      state.data.username = a
    },
    'GETAUTOGRAPH':(state,a) => {
      state.data.autograph = a
    },
    'GETSEX':(state,a) => {
      state.data.sex = a
    },
    'CHANGE_BIR': (state,bir) => {
      state.data.birth = bir
    }
  },
  actions: {
    'UPDATE_BIR':({ commit }, bir) => {
      commit('CHANGE_BIR', bir)
    },
    'INITDATA': async ({ commit }, id) => {
      let a = await user.getUserdata(id);
      // let a = await require("../mocks/User.json")
      commit('INIT', a)
    },
    'INITNAME':async ({ commit }, id) => {
      commit('GETNAME',id)
    },
    'INITAUTOGRAPH':async ({ commit }, id) => {
      commit('GETAUTOGRAPH',id)
    },
    'INITSEX':async ({ commit }, id) => {
      commit('GETSEX',id)
    },
    'VIP': async ({ commit }, a) => {
      commit('VIPMU', a+1)
    }
  },
  getters: {
    'GETDATA': ({ data }) => {
      return data
    },
    'GETVIP': ({ vip }) => {
      return vip
    }
  },
  modules: {
    home,data,
    token
  }
})