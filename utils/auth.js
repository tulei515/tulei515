const TokenKey = 'App-Token'

export function getToken() {
	return uni.getStorageSync(TokenKey)
}

export function setToken(token) {
	return uni.setStorageSync(TokenKey, token)
}

export function removeToken() {
	return uni.removeStorageSync(TokenKey)
}

/**
 * 从本地存储获取数据
 * @param {string} key - 存储的键
 * @returns {any} 解析后的存储数据
 */
export function getStorage(key) {
	try {
		return JSON.parse(uni.getStorageSync(key));
	} catch (error) {
		console.error(`获取本地存储【${key}】时出错: `, error);
		return null;
	}
}

/**
 * 将数据存储到本地
 * @param {string} key - 存储的键
 * @param {any} data - 要存储的数据
 * @returns {void}
 */
export function setStorage(key, data) {
	try {
		uni.setStorageSync(key, JSON.stringify(data));
	} catch (error) {
		console.error(`存储本地【${key}】时出错: `, error);
	}
}

/**
 * 从本地存储移除指定键的数据
 * @param {string} key - 要移除的存储键
 * @returns {void}
 */
export function removeStorage(key) {
	try {
		uni.removeStorageSync(key);
	} catch (error) {
		console.error(`移除本地存储【${key}】时出错: `, error);
	}
}