<template>
  <view>
    <view class="feedListItem__wrap">
      <view class="feedListItem__left">
        <image :src="image"/>
      </view>
      <view class="feedListItem__right">
        <view class="feedListItem__right__header">
          <view class="feedListItem__right__header__left">
            {{leftTitle}}
          </view>
          <view class="feedListItem__right__header__right">
            {{rightTitle}}
          </view>
        </view>
        <view class="feedListItem__right__body">
            {{bodyContent}}
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { ref, computed, onMounted, toRefs, watch, reactive } from 'vue'
import Taro from '@tarojs/taro'

export default {
  name: 'FeedListItem',
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
.feedListItem {
  &__wrap {
    display: flex;
    width: 343px;
    margin: 0 auto;
  }
  &__left {
    width: 60px;
    image {
      width: 50px;
      height: 50px;
      background-color: $gray01;
      border-radius: 8px;
    }
  }
  &__right {
    flex: 1;
    border-bottom: 1px solid $gray02;
    &__header {
      display: flex;
      &__left {
        flex: 1;
        @include font16Semi;
        color: $black;
      }
      &__right {
        @include font14Regular;
        color: $gray03;
      }
    }
    &__body {
      @include font14Regular;
      color: $black;
      margin: 8px 0 16px 0;
    }
  }
}
</style>
