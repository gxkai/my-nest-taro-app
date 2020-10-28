<template>
  <view class="profileHeader__wrap">
    <header-bar
      title="Profile"
      left-text="Settings"
      background-color="#5DB075"
      text-color="#ffffff"/>
    <view class="profileHeader__body">
        <image :src="hero"/>
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
  height: 200px;
  background-color: $green01;
  position: relative;
  image {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 100px;
    width: 158px;
    height: 158px;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 20px rgba(101, 101, 101, 0.15));
    border-radius: 50%;
  }
}
</style>
