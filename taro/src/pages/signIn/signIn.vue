<template>
  <view>
    <header-bar  title="Sign In"/>
    <form class="signIn__form">
      <view class="input__wrap">
        <input @change="changeUsername" v-model="form.username" placeholder="Username"/>
      </view>
      <view class="input__wrap">
        <input  @change="changePassword" v-model="form.password" placeholder="password" :type="showPassword ? 'text' : 'password'"/>
        <text @tap="handleShowPassword">Show</text>
      </view>
      <button @tap="signin">Log In</button>
      <button @tap="wechatSignin">Log In With Wechat</button>
    </form>
  </view>
</template>

<script>
import { ref, computed, onMounted, toRefs, watch, reactive } from 'vue'
import {useRequest} from "@felibs/request";
import api from "../../network/api.network";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import Taro from "@tarojs/taro"
export default {
  name: 'SignIn',
  components: {HeaderBar},
  setup () {
    const  form = reactive({
      username: '',
      password: '',
    })
    let showPassword = ref(false)
    const handleShowPassword = () => {
      showPassword.value = !showPassword.value
    }
    const changeUsername = (value = 'value') => {
      form.username = value
    }
    const changePassword = (value = 'value') => {
      form.password = value
    }
    const wechatSignin = () => {
      Taro.login({
        success: (res) => {
          console.log(res)
        }
      })
    }
    const { data, loading, error, run: signin, cancel } = useRequest(async () => {
      await api.auth.signin(form)
      await Taro.showToast({
        title: '登陆',
      })
    }, {manual: true,});
    return {
      handleShowPassword,
      showPassword,
      form,
      changeUsername,
      changePassword,
      signin,
      wechatSignin
    }
  },
}
</script>

<style lang="scss">
@import "@styles/variables";
.signIn {
  &__form {
    .input__wrap {
      display: flex;
      align-items: center;
      height: 50px;
      width: 343px;
      margin: 16px auto 0;
      background-color: $gray01;
      border: 1px solid $gray02;
      box-sizing: border-box;
      border-radius: 8px;
      padding: 0 16px;
      input {
        flex: 1;
        @include font16Medium;
        color: $black;
        &::placeholder {
          color: $gray03;
        }
      }
      text {
        color: $green01;
        @include font16Medium;
      }
      & + .input__wrap {
        margin-top: 16px;
      }
    }
    button {
      width: 343px;
      height: 50px;
      background-color: $green01;
      color: $white;
      border-radius: 100px;
      @include font16Semi;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
    }
  }
}
</style>
