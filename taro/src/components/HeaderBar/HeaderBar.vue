<template>
  <view>
    <view class="headerBar__wrap" :style="style">
      <view class="headerBar__left" :style="{width: capsuleWith + 'px'}">
        <slot name="left">
          <text v-if="showBack" class="headerBar__left--text headerBar__left--back" @tap="handleBack">Back</text>
          <text v-if="showClose" class="headerBar__left--text headerBar__left--close" @tap="handleLeft">x</text>
          <text v-if="leftText" class="headerBar__left--text" :style="{color: textColor|| leftTextColor}" @tap="handleLeft">{{leftText}}</text>
        </slot>
      </view>
      <view class="headerBar__center">
        <slot>
          <text class="headerBar__center--text" :style="{color: textColor }">{{title}}</text>
        </slot>
      </view>
      <view class="headerBar__right" :style="{width: capsuleWith + 'px'}">
        <slot name="right">
          <text v-if="rightText" class="headerBar__right--text" :style="{color: textColor || rightTextColor}">{{rightText}}</text>
        </slot>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import {HeaderBarProps} from "@types/HeaderBar";
import Taro from '@tarojs/taro'
export default {
  name: 'HeaderBar',
  props:{
    title: {type: String},
    titleColor: {type: String, default: ''},
    textColor: {type: String, default: ''},
    showBack: {type: Boolean, default: false},
    showClose: {type: Boolean, default: false},
    leftText: {type: String, default: ''},
    leftTextColor: {type: String, default: ''},
    rightText: {type: String, default: ''},
    rightTextColor: {type: String, default: ''},
    backgroundColor: {type: String, default: '#ffffff'},
  },
  components: {},
  setup (props:HeaderBarProps) {
    const handleBack = () => {
      Taro.navigateBack();
    }
    const handleLeft = () => {
      this.$emit('clickLeft');
    }
    return {
      style:  {
        paddingTop: Taro.$statusBarHeight + 'px',
        backgroundColor: props.backgroundColor,
      },
      handleBack,
      handleLeft,
      capsuleWith: Taro.$capsuleWitdh,
    }
  },
}
</script>

<style lang="scss">
@import "@styles/variables";
.headerBar {
  &__wrap {
    display: flex;
    align-items: center;
    height: 36px;
  }
  &__left {
    padding-left: calc((375px - 343px) / 2);
    &--text {
      @include font16Medium;
    }
    &--back {
      color: $green01;
    }
    &--close {
      color: $gray03;
    }
  }
  &__right {
    &--text {
      @include font16Medium;
    }
  }
  &__center {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    &--text {
      @include font30Semi;
      color: $black;
    }
  }
}
</style>
