import Taro from '@tarojs/taro';
const key = 'token';
export function setToken(args) {
  Taro.setStorageSync(key, args);
}
export function getToken() {
  Taro.getStorageSync(key);
}
export function removeToken() {
  Taro.removeStorageSync(key);
}
