<template>
    <view class="profileTab__wrap">
      <view class="profileTab__header">
        <view class="profileTab__header__text">
          Posts
        </view>
        <view class="profileTab__header__text">
          Photos
        </view>
      </view>
    </view>
</template>
<script lang="ts">
export default {
  name: 'ProfileTab',
  components: {}
}
</script>
<style lang="scss" >
@import "@styles/variables";
.profileTab__header {
  background-color: $gray01;
  border: 1px solid $gray02;
  box-sizing: border-box;
  border-radius: 100px;
  height: 46px;
  width: 343px;
  margin: 0 auto;
  display: flex;
  &__text {
    flex: 1;
  }
}
</style>
