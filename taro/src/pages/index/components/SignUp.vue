<template>
  <view>
    <form class="signUp__form">
      <view class="input__wrap">
        <input @change="changeUsername" :value="form.username" placeholder="Username"/>
      </view>
      <view class="input__wrap">
        <input @change="changePassword" :value="form.password" placeholder="password" type="password"/>
        <text>Show</text>
      </view>
      <button @tap="signup">Sign Up</button>
    </form>
  </view>
</template>

<script>
import { ref, computed, onMounted, toRefs, watch, reactive } from 'vue'
import api from '../../../network/api.network';
export default {
  name: 'SignUp',
  components: {},
  setup () {
    const  form = reactive({
      username: '',
      password: '',
    })
    const changeUsername = (value = 'value') => {
      form.username = value
    }
    const changePassword = (value = 'value') => {
      form.password = value
    }
    const signup = async () => {
      await api.auth.signup(form)
      await Taro.showToast({
        title: '注册成功',
      })
    }
    return {
      form,
      changeUsername,
      changePassword,
      signup,
    }
  },
}
</script>

<style lang="scss">
@import "../../../app";
.signUp {
  &__form {
    .input__wrap {
      display: flex;
      align-items: center;
      height: 50px;
      width: 343px;
      margin: 0 auto;
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

/* Input/Text */

position: absolute;
height: 50px;
left: 16px;
right: 16px;
top: 128px;



/* BG */

position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;

/* Gray/01 */
background: #F6F6F6;
/* Gray/02 */
border: 1px solid #E8E8E8;
box-sizing: border-box;
border-radius: 8px;


/* Name */

position: absolute;
width: 45px;
height: 19px;
left: 16px;
top: calc(50% - 19px/2 + 0.5px);

/* UI - 16 Medium */
font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;

/* Gray/03 */
color: #BDBDBD;


/* Show */

position: absolute;
visibility: hidden;
width: 43px;
height: 19px;
right: 16px;
top: calc(50% - 19px/2 + 0.5px);

font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
text-align: right;

/* Green/Primary */
color: #5DB075;
