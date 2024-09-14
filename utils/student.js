import {
	setStorage,
	getStorage
} from '@/utils/auth'

export function getCurStudent() {
	return getStorage('student')
}
export function setCurStudent(data) {
	return setStorage('student', data)
}
export function hasCurStudent(stuList) {
	const curStudent = getCurStudent();
	if (curStudent) {
		return stuList.some((i) => i.studentId === curStudent.studentId);
	}
	return false;
}
export function isCurStudent(stu) {
	return stu.studentId == getCurStudent().studentId;
}

export function findCurStudentIndex(stuList) {
	const curStudent = getCurStudent();
	if (curStudent) {
		for (let i = 0; i < stuList.length; i++) {
			if (stuList[i].studentId === curStudent.studentId) {
				return i;
			}
		}
	}
	return -1; // 表示未找到
}