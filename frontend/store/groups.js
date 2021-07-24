import axios from "axios";

const apiUrl = "http://localhost:3000";

const state = {
  groups: [],
  group: null,
  isEditMode: false,
};

const getters = {
  groups: (state) => state.groups,
  group: (state) => state.group,
  isEditMode: state => state.isEditMode,
};

const mutations = {
  setGroups: (state, groups) => (state.groups = groups),
  appendGroup: (state, group) => (state.groups = [...state.groups, group]),
  setGroup: (state, group) => (state.group = group),
  removeGroup: (state, group) => (state.groups = state.groups.filter(g => g.id !== group.id)),
  resetGroup: state => (state.group = null),
  updateGroup: (state, group) => (state.groups = state.groups.map(g => (g.id === group.id ? group : g))),
  setEditMode: (state, bool) => (state.isEditMode = bool),
};

const actions = {
  async fetchGroups({ commit }) {
    const response = await axios.get(`${apiUrl}/groups`);
    commit("setGroups", response.data); // mutationを呼び出す
  },
  setGroup({ commit }, group) {
    commit('setGroup', group);
  },
  setEditMode({ commit }, bool) {
    commit('setEditMode', bool)
  },
  async createGroup({ commit }, group) {
    const response = await axios.post(`${apiUrl}/groups`, group);
    commit('appendGroup', response.data);
  },
  async deleteGroup({ commit }, id) {
    const response = await axios.delete(`${apiUrl}/groups/${id}`);
    commit('removeGroup', response.data);
    commit('resetGroup');
  },
  async updateGroup({ commit }, group) {
    const response = await axios.put(`${apiUrl}/groups/${group.id}`, group);
    commit('updateGroup', response.data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
