import { createApp } from 'vue'
import store from './store'
import './app.scss'
import Taro from '@tarojs/taro'
const App = createApp({
  onShow (options) {
    Taro.$capsuleWitdh = Taro.getMenuButtonBoundingClientRect().width;
    Taro.$capsuleHeight = Taro.getMenuButtonBoundingClientRect().height;
    Taro.getSystemInfo({})
      .then(res  => {
        Taro.$statusBarHeight =  res.statusBarHeight || 0
        Taro.$screenHeight = res.screenHeight || 0
      })
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(store)

export default App
