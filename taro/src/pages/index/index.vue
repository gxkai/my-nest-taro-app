<template>
  <view class="index">
    <SignUp />
  </view>
</template>

<script>
import SignUp from './components/SignUp';
export default {
  name: 'Index',
  components: {
    SignUp,
  },
  created() {
  }
}
</script>

<style>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
