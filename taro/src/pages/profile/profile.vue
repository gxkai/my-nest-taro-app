<template>
  <layout>
    <profile-header />
    <view class="profile__wrap">
      <profile-tab />
    </view>
  </layout>
</template>

<script lang="ts">
import Layout from "@components/Layout/Layout.vue";
import Taro from "@tarojs/taro";
import ProfileHeader from "@components/ProfileHeader/ProfileHeader.vue";
import ProfileTab from "@components/ProfileTab/ProfileTab.vue";
export default {
  name: 'Feed',
  components: {
    ProfileTab,
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
