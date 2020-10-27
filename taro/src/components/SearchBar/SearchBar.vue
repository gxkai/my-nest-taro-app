<template>
  <view>
    <view class="searchBar__wrap">
      <input class="searchBar__input" :placeholder="placeholder"/>
    </view>
  </view>
</template>

<script lang="ts">
import { ref, computed, onMounted, toRefs, watch, reactive } from 'vue'
import Taro from '@tarojs/taro'
export default {
  name: 'SearchBar',
  props:{
    placeholder: {
      type: String,
      default: 'Search'
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
.searchBar {
  &__wrap {

  }
  &__input {
    background-color: $gray01;
    border: 1px solid $gray02;
    box-sizing: border-box;
    border-radius: 100px;
    width: 342px;
    height: 50px;
    margin: 0 auto;
    padding: 0 16px;
    @include font16Medium;
    color: $black;
    &::placeholder {
      color: $gray03;
    }
  }

}
</style>
