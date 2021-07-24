import axios from 'axios';

const apiUrl = 'http://localhost:3000';

const state = {
  groups: []
};

const getters = {
  groups: state => state.groups
}

const mutations = {
  setGroups: (state, groups) => (state.groups = groups)
}

const actions = {
  async fetchGroups({ commit }) {
    const response = await axios.get(`${apiUrl}/groups`);
    commit('setGroups', response.data);  // mutationを呼び出す
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};