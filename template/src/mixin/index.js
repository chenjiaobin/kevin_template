import Vue from 'vue'
// 引入混合的组件
import Button from './Button'

let mixinObj = {
	'Button': Button
}

// 执行循环，将mixinObj里面的组件都混合进去
for (var key in mixinObj) {
	Vue.component(keu).mixin(mixinObj[key])
}