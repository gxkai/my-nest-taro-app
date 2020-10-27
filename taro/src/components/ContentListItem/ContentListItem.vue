<template>
  <view>
    <view class="contentListItem__wrap">
      <view class="contentListItem__top">
        <image :src="image"/>
      </view>
      <view class="contentListItem__bottom">
        <view class="contentListItem__bottom__header">
          {{leftTitle}}
        </view>
        <view class="contentListItem__bottom__body">
            {{bodyContent}}
        </view>
        <view class="contentListItem__bottom__footer">
          {{rightTitle}}
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { ref, computed, onMounted, toRefs, watch, reactive } from 'vue'
import Taro from '@tarojs/taro'

export default {
  name: 'ContentListItem',
  props:{
    image: {
      type: String,
      default: "https://cdn.v2ex.com/navatar/c451/47de/116_large.png?m=1584298562"
    },
    leftTitle: {
      type: String,
      default: "Header"
    },
    rightTitle: {
      type: String,
      default: "8m ago"
    },
    bodyContent: {
      type: String,
      default: `
        He'll want to use your yacht, and I don't want this thing smelling like fish.
      `
    }
  },
  components: {
  },
  setup () {
    return {
    }
  },
}
</script>

<style lang="scss">
@import "@styles/variables";
.contentListItem {
  &__wrap {
    width: 343px;
    margin: 0 auto;
  }
  &__top {
    image {
      width: 100%;
      background-color: $gray01;
      border-radius: 8px;
    }
  }
  &__bottom {
    flex: 1;
    &__header {
      display: flex;
      @include font16Semi;
      color: $black;
    }
    &__body {
      @include font14Regular;
      color: $black;
      margin: 8px 0 16px 0;
    }
    &__footer {
      @include font14Regular;
      color: $gray03;
    }
  }
}
</style>
