<template>
  <layout>
    <view class="profile__header" #header>
      <view :style="style"></view>
    </view>
    <view class="profile__wrap">
    </view>
  </layout>
</template>

<script lang="ts">
import Layout from "@components/Layout/Layout.vue";
import Taro from "@tarojs/taro";
export default {
  name: 'Feed',
  components: {
    Layout,
  },
  setup() {
    return {
      style:  {
        paddingTop: Taro.$navBarMarginTop + 'px',
      },
    }
  },
  created() {
  }
}
</script>

<style lang="scss">
.profile__wrap {
}
</style>
