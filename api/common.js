import request from '@/utils/request'


// 教师列表
export function getStsToken() {
	return request({
		url: "/common/getStsToken",
		method: "get",
	});
}