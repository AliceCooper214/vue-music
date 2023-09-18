import { createApp } from 'vue'
import App from './App.vue'
import lazyPlugin from 'vue3-lazy'

import router from './router'
import store from './store'
import loadingDirective from '@/components/base/loading/directive'
import noResultDirective from '@/components/base/no-result/directive'
import defaultImage from '@/assets/images/default.png'
import { load, saveAll } from '@/assets/js/array-store'
import { FAVORITE_KEY, PLAY_KEY } from '@/assets/js/constant'
import { processSongs } from '@/service/song'

import '@/assets/scss/index.scss'

const favoriteSongs = load(FAVORITE_KEY)
console.log(favoriteSongs)
if (favoriteSongs.length > 0) {
  processSongs(favoriteSongs).then(songs => {
    store.commit('setFavoriteList', favoriteSongs)
    saveAll(songs, FAVORITE_KEY)
  })
}

const historySongs = load(PLAY_KEY)
if (historySongs.length > 0) {
  processSongs(historySongs).then(songs => {
    store.commit('setPlayHistory', songs)
    saveAll(songs, PLAY_KEY)
  })
}

createApp(App)
  .use(router)
  .use(store)
  .use(lazyPlugin, {
    loading: defaultImage,
  })
  .directive('loading', loadingDirective)
  .directive('no-result', noResultDirective)
  .mount('#app')
