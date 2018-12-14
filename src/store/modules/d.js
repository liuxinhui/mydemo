const state = {
  jine: 10
}

const mutations = {
  add (state, param) {
    state.jine += param
  },
  reduce (state) {
    state.jine--
  }
}

const actions = {
  add: ({commit}, param) => {
    commit('add', param)
  },
  reduce: ({commit}) => {
    commit('reduce')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
