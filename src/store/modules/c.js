const state = {
  num: 2
}

const mutations = {
  add (state, param) {
    window.console.log(param)
    state.num += param
  },
  reduce (state) {
    state.num--
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
