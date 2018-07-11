import { demo1 } from './modules/demo1'
import { demo2 } from './modules/demo2'

const state = {}
const gettters = {}
const mutations = {}
const actions = {}

export default new Vuex.Store({
	state,
	gettters,
	mutations,
	actions,
	modules: {
		demo1,
		demo2
	}
})