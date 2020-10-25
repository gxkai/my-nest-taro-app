import Taro from '@tarojs/taro'
import { getToken } from '../storage/token.storage';
function http(method, url, data = {}) {
  return new Promise(function (resolve, reject) {
    Taro.request({
      url: url,
      method: method,
      data: JSON.stringify(data),
      header: {
        'Content-Type': 'application/json; charset=utf-8',
        'token': getToken(),
      },
      success: function (res) {
        if (res.statusCode !== 200 ) {
          Taro.showToast({
            title: res.data.message.join(';\n'),
            icon: 'none',
            duration: 3000
          })
        } else {
          resolve(res.data);
        }
      },
      fail: function (err) {
        console.log(err)
        reject(err)
      }
    })
  })
}
export default http
