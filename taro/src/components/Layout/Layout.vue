<template>
  <view class="layout__wrap">
    <view class="layout__header">
      <slot name="header" />
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
export default {
  name: 'Layout',
  components: {FooterBar},
  setup () {
    const style = reactive<{height: number | string}>({
      height: "calc(100vh - 83.5px)"
    })
    return {
      style,
    }
  },
}
</script>

<style lang="scss">
@import "@styles/variables";
.layout {
  &__wrap {
    display: flex;
    flex-direction: column;
  }
  &__body {
    height: 100px;
  }
}
</style>
