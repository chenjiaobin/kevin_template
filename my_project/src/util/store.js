/**
 * localStorage缓存
 * @param  {[string]} key   [localstorage的key值]
 * @param  {[string]} value [localstorage存放的值]
 */
export default saveToStore(key, value) {
	let local = window.localStorage.__local__
	if (!local) {
		local = {}
	} else {
		local = JSON.parse(local)
	}
	local[key] = value
	window.localStorage.__local__ = JSON.stringify(local)
}

/**
 * 读取localstorage指定key值
 * @param  {[string]} key [key值]
 * @param  {[string]} def
 * @return {[Object]} [返回localStorage[key]的值]
 */
export default loadFromStore(key, def) {
	let local = window.localStorage.__local__
	if (!local) {
		return def
	}
	local = JSON.parse(local)
	return local[key] || def
}
