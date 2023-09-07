<template>
  <div class="singer-detail">
    <music-list :songs="songs" :title="title" :pic="pic" :loading="loading"></music-list>
  </div>
</template>

<script>
import storage from 'good-storage'
import { getSingerDetail } from '@/service/singer'
import { processSongs } from '@/service/song'
import MusicList from '@/components/music-list/music-list'
import { SINGER_KEY } from '@/assets/js/constant'

export default {
  name: 'singer-detail',
  components: {
    MusicList,
  },
  props: {
    singer: Object,
  },
  data() {
    return {
      songs: [],
      loading: true,
    }
  },
  computed: {
    computedSinger() {
      let ret = null
      const singer = this.singer
      if (singer) {
        ret = singer
      } else {
        const cached = storage.session.get(SINGER_KEY)
        if (cached && (cached.mid || cached.id + '') === this.$route.params.id) {
          ret = cached
        }
      }
      return ret
    },
    pic() {
      const singer = this.computedSinger
      return singer && singer.pic
    },
    title() {
      const singer = this.computedSinger
      return singer && singer.name
    },
  },
  async created() {
    const data = this.computedSinger
    if (!data) {
      const path = this.$route.matched[0].path
      this.$router.push({
        path,
      })
      return
    }
    const result = await getSingerDetail(data)
    this.songs = await processSongs(result.songs)
    this.loading = false
  },
}
</script>

<style lang="scss" scoped>
.singer-detail {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: $color-background;
}
</style>
