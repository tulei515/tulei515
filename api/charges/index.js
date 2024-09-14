import request from '@/utils/request'

// 登录方法
export function getLoginUser(userId) {
	const data = {
		userId,
	}
	return request({
		url: '/getLoginUser',
		headers: {
			isToken: false
		},
		method: 'post',
		data
	})
}

export function getStudentList(data) {
	return request({
		url: '/getStudentList',
		method: 'post',
		data
	})
}

export function appList(params) {
	return request({
		url: '/workflow/schoolInstitutionCooperate/appList',
		method: 'get',
		params
	})
}

export function schoolInstitutionCooperateGetInfo(data) {
	return request({
		url: '/workflow/schoolInstitutionCooperate/getInfo',
		method: 'post',
		data
	})
}

export function getSchoolCodeInfo(params) {
	return request({
		url: '/workflow/school/getSchoolCodeInfo',
		method: 'get',
		params
	})
}

export function termList(params) {
	return request({
		url: '/workflow/schoolTerm/termList',
		method: 'get',
		params
	})
}

export function termProjectAppList(params) {
	return request({
		url: '/workflow/termProject/appList',
		method: 'get',
		params
	})
}

export function institutionAppList(params) {
	return request({
		url: '/workflow/institution/appList',
		method: 'get',
		params
	})
}

export function studentFeeRecordsSave(data) {
	return request({
		url: '/workflow/studentFeeRecords/save',
		method: 'post',
		data
	})
}

export function highSchoolBiddingAppList(params) {
	return request({
		url: '/workflow/highSchoolBidding/appList',
		method: 'get',
		params
	})
}

export function jumpKhH5Services(params) {
	return request({
		url: '/workflow/school/jumpKhH5Services',
		method: 'get',
		params
	})
}

export function complaintAdd(data) {
	return request({
		url: '/workflow/termPojectComplaint/add',
		method: 'post',
		data
	})
}