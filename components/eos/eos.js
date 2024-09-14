import moment from "moment";
import {
	getStsToken
} from '@/api/common'
const AWS = require("aws-sdk");

const newGuid = () => {
	var guid = "";
	for (var i = 1; i <= 8; i++) {
		guid += Math.floor(Math.random() * 16.0).toString(16);
	}
	return guid;
};

let i = 0 //用于控制递归次数 中断条件
/**
 *
 * @param {文件对象} filePath
 * @param {文件名} fileName
 * @param {文件类型} uploadType
 * @param {成功的回调} successCallback
 * @param {失败的回调,可选参数} failureCallback
 */
export const getOSSUploadFilePath = async (filePath, filename, uploadType, successCallback, failureCallback) => {
	let projectName = 'ets'
	var eosParam = sessionStorage.getItem('eosParam');

	// 判断配置信息是否过期
	if (eosParam && eosParam != 'null' && eosParam != 'undefined') {
		var ParamOss = JSON.parse(eosParam);
		const diffDate = moment().diff(moment(ParamOss.expiration), 'seconds', true);
		eosParam = JSON.parse(eosParam);
		if (diffDate >= 0) {
			eosParam = '';
		}
	}
	// 优先读取缓存中的移动云配置信息
	if (eosParam && eosParam.accessKeyId) {
		var radomString = newGuid();
		let year = new Date().getFullYear()
		var nowTime = new Date().getTime();
		// 生成唯一文件名
		// const fileFullName = `${radomString}${nowTime}${filename}`;
		var host = "https://" + eosParam.bucketName + "." + eosParam.endPoint; //拼接图片地址
		var s3 = new AWS.S3({
			accessKeyId: eosParam.accessKeyId,
			secretAccessKey: eosParam.accessKeySecret,
			endpoint: eosParam.endPoint,
			sessionToken: eosParam.securityToken,
		});

		// 上传参数
		var params = {
			Key: `${projectName}/${nowTime}/${filename}`,
			Bucket: eosParam.bucketName,
			ContentType: filePath.type,
			Body: filePath,
			ACL: "public-read-write"
		}

		// 上传
		s3.putObject(params, function(err) {
			if (err) {
				failureCallback && failureCallback(err);
			} else {
				// 成功的回调
				successCallback && successCallback(host + `/${params.Key}`);
			}
		});
	} else {
		// 终端递归  防止移动云停机多次调用递归
		i++
		// 重置递归变量  每次获取OSS配置信息错误时最多只调用5次
		if (i >= 5) return i = 0

		// 若本地没有配置信息,则先获取配置信息然后上传
		sessionStorage.removeItem('eosParam')

		getStsToken().then((res) => {
			sessionStorage.setItem('eosParam', JSON.stringify(res.data));
			getOSSUploadFilePath(filePath, filename, uploadType, successCallback, failureCallback);
		})
		// 获取移动云配置信息
	}
};

// export default {
//   install() {
//     Vue.prototype.Eos = {
//       uploadFile,
//     };
//   },
// };