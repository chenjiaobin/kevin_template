const HelloWorld = () => import('@/components/HelloWorld')

export default [
  {
    path: '/demo2',
    components: HelloWorld,
    meta: {
      title: '这是demo2'
    }
  }
]
