export const demo2 = {
  namespaced: true,
  state: {
    day: 0
  },
  getters: {
    getDay: state => {
      return state.day
    }
  },
  mutations: {
    setDay (state, num) {
      state.day = num
    }
  },
  actions: {
    async setNowDay ({ commit }, num) {
      commit('setDay', num)
    }
  }
}