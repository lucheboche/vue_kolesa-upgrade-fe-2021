import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/js/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {},
    cardsMassiveCloth: [],
    cardsMassiveAccessory: [],
  },
  mutations: {
    mutUserData(state, res) {
      state.userData = res;
    },
    mutCardsMassiveCloth(state, res) {
      state.cardsMassiveCloth = res;
    },
    mutCardsMassiveAccessory(state, res) {
      state.cardsMassiveAccessory = res;
    },
  },
  actions: {
    fetchUserData({ commit }) {
      axios.get('7ZW3y5GAuIge/data')
        .then((res) => {
          commit('mutUserData', res.data);
        })
        .catch(console.log);
    },
    fetchCardsData({ commit }) {
      axios.get('-_RLsEGjof6i/data')
        .then((res) => {
          commit('mutCardsMassiveCloth', res.data);
        })
        .catch(console.log);
      axios.get('q3OPxRyEcPvP/data')
        .then((res) => {
          commit('mutCardsMassiveAccessory', res.data);
        })
        .catch(console.log);
    },
  },
  modules: {
  },
});
