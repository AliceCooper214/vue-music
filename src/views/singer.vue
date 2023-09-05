<template>
  <div class="singer" v-loading="!singers.length">
    <index-list :data="singers" @select="selectSinger"></index-list>
  </div>
  <!-- <router-view v-slot="{ Component }">
    <transition appear name="slide">
      <component :is="Component" :data="selectedSinger" />
    </transition>
  </router-view> -->
  <router-view :singer="selectedSinger"></router-view>
</template>

<script>
import { getSingerList } from '@/service/singer'
import IndexList from '@/components/index-list/index-list.vue'

export default {
  name: 'singer',
  components: {
    IndexList,
  },
  data() {
    return {
      singers: [],
      selectedSinger: null,
    }
  },
  async created() {
    const result = await getSingerList()
    this.singers = result.singers
  },
  methods: {
    selectSinger(singer) {
      this.selectedSinger = singer
      this.$router.push({
        path: `/singer/${singer.mid}`,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.singer {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
</style>
