<template>
  <view>
    <view class="footerBar__wrap">
      <AtIcon value='home' size='30' color='#5DB075'></AtIcon>
      <AtIcon value='home' size='30' color='#BDBDBD'></AtIcon>
      <AtIcon value='home' size='30' color='#BDBDBD'></AtIcon>
      <AtIcon value='home' size='30' color='#BDBDBD'></AtIcon>
      <AtIcon value='home' size='30' color='#BDBDBD'></AtIcon>
    </view>
  </view>
</template>

<script lang="ts">
import { ref, computed, onMounted, toRefs, watch, reactive } from 'vue'
import Taro from '@tarojs/taro'
import {AtIcon} from 'taro-ui-vue3'
export default {
  name: 'FooterBar',
  props:{
  },
  components: {
    AtIcon
  },
  setup () {
    return {
    }
  },
}
</script>

<style lang="scss">
@import "@styles/variables";
.footerBar {
  &__wrap {
    display: flex;
    justify-content: space-evenly;
    height: 83.5px;
    background-color: $gray01;
  }
}
</style>
