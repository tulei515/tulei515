// 密钥
const key = 'abcdefg123hjtdkd';
// 加密函数
export function encrypt(text) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    result += String.fromCharCode(
      text.charCodeAt(i) ^ key.charCodeAt(i % key.length),
    );
  }
  return result;
}
// 解密函数
export function decrypt(encryptedText) {
  let result = '';
  for (let i = 0; i < encryptedText.length; i++) {
    result += String.fromCharCode(
      encryptedText.charCodeAt(i) ^ key.charCodeAt(i % key.length),
    );
  }
  return result;
}
