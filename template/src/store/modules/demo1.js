/**
 * 注释
 * 添加了namespaced使用的时候如下
 */
export const demo1 = {
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