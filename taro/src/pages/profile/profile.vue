<template>
  <layout>
    <profile-header />
    <view class="profile__wrap">
    </view>
  </layout>
</template>

<script lang="ts">
import Layout from "@components/Layout/Layout.vue";
import Taro from "@tarojs/taro";
import ProfileHeader from "@components/ProfileHeader/ProfileHeader.vue";
export default {
  name: 'Feed',
  components: {
    ProfileHeader,
    Layout,
  },
  setup() {
    return {
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
