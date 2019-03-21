import axios from 'axios'

export const http = axios.create({
	 baseURL: 'http://tradclass.ddns.net:6123/api/'
})

export default function install (Vue) {
	Object.defineProperty(Vue.prototype, '$http', {
		get () {
			return http
		}
	})
}