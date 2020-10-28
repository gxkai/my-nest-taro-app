<template>
  <view class="profileHeader__wrap">
    <view class="profileHeader__body">
        <image :src="hero"/>
    </view>
    <view class="profileHeader__footer">
      <view class="profileHeader__footer--name">
        {{name}}
      </view>
      <view class="profileHeader__footer--mantra">
        {{mantra}}
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import HeaderBar from "@components/HeaderBar/HeaderBar.vue";
export default {
  name: 'ProfileHeader',
  props: {
    hero: {
      type: String,
      default: require('@assets/images/hero.png')
    },
    name: {
      type: String,
      default: 'Victoria Robertson'
    },
    mantra: {
      type: String,
      default: 'A mantra goes here'
    }
  },
  components: {HeaderBar}
}
</script>
<style lang="scss" >
@import "@styles/variables";
.profileHeader__wrap {

}
.profileHeader__body {
  height: 120px;
  background-color: $green01;
  position: relative;
  image {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 20px;
    width: 158px;
    height: 158px;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 20px rgba(101, 101, 101, 0.15));
    border-radius: 50%;
  }
}
.profileHeader__footer {
  margin-top: 57px;
  &--name {
    @include font30Semi;
    color: $black;
    text-align: center;
  }
  &--mantra {
    @include font16Semi;
    color: $black;
    text-align: center;
  }
}
</style>
