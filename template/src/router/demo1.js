const HelloWorld = () => import('@/components/HelloWorld')

export default [
	{
		path: '/',
		redirect: '/demo1'
	},
	{
		path: '/demo1',
		component: HelloWorld,
		meta: {
			title: '这是demo1'
		}
	}
]