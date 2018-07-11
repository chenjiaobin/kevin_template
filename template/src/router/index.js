import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
	base: '/',
	mode: 'history',
	linkActiveClass: 'active',
	routes: routes,
	scrollBehavior (to, from ,savePosition){
		if (savePosition) {
			return savePosition
		} else {
			return { x: 0, y: 0 }
		}
	}
})

// 跳转每个路由之前执行的事件
router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title
	}
	next()
})

// 跳转每个路由之后执行的事件
router.afterEach(route => {
	console.log(route)
})

export default router
