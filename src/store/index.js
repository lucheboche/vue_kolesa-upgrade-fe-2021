import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/js/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {
      score: {
        type: Number,
        required: true,
      },
    },
    search: '',
  },
  mutations: {
    UserData(state, res) {
      state.userData = res;
    },
    UserScore(state, cardPrice) {
      state.userData.score -= cardPrice;
    },
    Search(state, search) {
      state.search = search;
    },
  },
  actions: {
    fetchUserData({ commit }) {
      axios.get('7ZW3y5GAuIge/data')
        .then((res) => {
          commit('UserData', res.data);
        })
        .catch(console.log);
    },
    fetchCardsMassiveCloth() {
      return axios.get('-_RLsEGjof6i/data');
    },
    fetchCardsMassiveAccessory() {
      return axios.get('q3OPxRyEcPvP/data');
    },
  },
});
