const HelloWorld = () => import('@/components/HelloWorld')

export default [
  {
    path: '/',
    redirect: '/demo1'
  },
  {
    path: '/demo1',
    components: HelloWorld,
    meta: {
      title: '这是demo1'
    }
  }
]
