<template>
  <layout>
    <header-bar  show-back title="Feed" />
    <view class="feed__wrap">
      <search-bar />
      <view>
        <feed-list-item />
      </view>
    </view>
  </layout>
</template>

<script lang="ts">
import HeaderBar from "@components/HeaderBar/HeaderBar.vue";
import Layout from "@components/Layout/Layout.vue";
import FooterBar from "@components/FooterBar/FooterBar.vue";
import SearchBar from "@components/SearchBar/SearchBar.vue";
import FeedListItem from "@components/FeedListItem/FeedListItem.vue";
export default {
  name: 'Feed',
  components: {
    FeedListItem,
    SearchBar,
    FooterBar,
    Layout,
    HeaderBar
  },
  created() {
  }
}
</script>

<style lang="scss">
.feed__wrap {
  margin-top: 32px;
}
</style>
