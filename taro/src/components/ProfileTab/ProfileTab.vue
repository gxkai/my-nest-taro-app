<template>
    <view class="profileTab__wrap">
      <view class="profileTab__header">
        <view class="profileTab__header__text profileTab__header__text--active">
          Posts
        </view>
        <view class="profileTab__header__text">
          Photos
        </view>
      </view>
      <view class="profileTab__body">
        <feed-list-item />
        <feed-list-item />
        <feed-list-item />
        <feed-list-item />
        <feed-list-item />
        <feed-list-item />
        <feed-list-item />
        <feed-list-item />
        <feed-list-item />
        <feed-list-item />
      </view>
    </view>
</template>
<script lang="ts">
import FeedListItem from "@components/FeedListItem/FeedListItem.vue";
export default {
  name: 'ProfileTab',
  components: {FeedListItem}
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
    display: flex;
    align-items: center;
    justify-content: center;
    &--active {
      color: $green01;
      border-radius: 100px;
      background-color: $white;
    }
  }
}
</style>
