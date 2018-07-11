import axios from 'axios'
import qs from 'qs'

/**
 * [axios的拦截器]
 */
const service = axios.create({
	baseURL: 'https://some-domain.com/api/',
	withCredentials: true,
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  transformRequest: [function(data) {
    if (data && data.params) {
      return qs.stringify(data.params)
    } else {
      return qs.stringify(data)
    }
  }]
})

service.interceptors.request.use(config => {
	config.headers['Content-Type'] = "application/x-www-form-urlencoded",
	return config
})

service.interceptors.response.use(response => {
	switch (parseInt(response.data.code)) {
		case 3002 :
			// if (response.data.msg == '登陆过期') {
			// 	let href = location.href
			// 	location.href = `http://some.com/login?redirect=${href}`
			// }
			return  Promise.reject('')
		case 2000:
			return response.data
		default:
			return Promise.reject(response.data.msg)
	}
}, error => {
	return Promise.reject('')
})

export default service