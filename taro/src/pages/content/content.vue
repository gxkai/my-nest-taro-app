<template>
  <layout>
    <header-bar  show-back title="Content" #header/>
    <view class="content__wrap">
      <search-bar />
      <view>
        <content-list-item />
      </view>
    </view>
  </layout>
</template>

<script lang="ts">
import HeaderBar from "@components/HeaderBar/HeaderBar.vue";
import Layout from "@components/Layout/Layout.vue";
import FooterBar from "@components/FooterBar/FooterBar.vue";
import SearchBar from "@components/SearchBar/SearchBar.vue";
import ContentListItem from "@components/ContentListItem/ContentListItem.vue";
export default {
  name: 'Feed',
  components: {
    ContentListItem,
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
.content__wrap {
  margin-top: 32px;
}
</style>
