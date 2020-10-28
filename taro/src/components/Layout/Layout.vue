<template>
  <view class="layout__wrap">
    <view class="layout__header">
      <slot name="header">
        <header-bar
          title="Profile"
          left-text="Settings"
          background-color="#5DB075"
          text-color="#ffffff"
        />
      </slot>
    </view>
    <view class="layout__body" :style="style">
      <slot/>
    </view>
    <view class="layout__footer">
      <slot name="footer">
        <footer-bar />
      </slot>
    </view>
  </view>
</template>

<script lang="ts">
import { ref, computed, onMounted, toRefs, watch, reactive, Ref, nextTick } from 'vue'
import Taro from '@tarojs/taro'
import FooterBar from "@components/FooterBar/FooterBar.vue";
import HeaderBar from "@components/HeaderBar/HeaderBar.vue";
export default {
  name: 'Layout',
  components: {HeaderBar, FooterBar},
  setup () {
    return {
      style: {
        marginTop: Taro.$capsuleHeight + Taro.$statusBarHeight + "px"
      }
    }
  },
}
</script>

<style lang="scss">
@import "@styles/variables";
.layout {
  &__wrap {
    position: relative;
  }
  &__header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9999;
  }
  &__body {
  }
  &__footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}
</style>
