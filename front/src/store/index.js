import Vue from 'vue'
import Vuex from 'vuex'
import { getMember, addMember } from '@/api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isScroll : false,
    members : []
  },
  mutations: {
    SET_MEMBERS(state, members){
      state.members = members;
    },
  },
  actions: {
    //멤버
    async GET_MEMBERS(context){
      const response = await getMember();
      console.log(response);
      context.commit('SET_MEMBERS', response.data);
    },
    async ADD_MEMBERS(context, member){
      const response = await addMember(member);
    },
  },
  modules: {
  }
})
