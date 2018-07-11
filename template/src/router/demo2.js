const HelloWorld = () => import('@/components/HelloWorld')

export default [
	{
		path: '/demo2',
		component: HelloWorld,
		meta: {
			title: '这是demo2'
		}
	}
]