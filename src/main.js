import { createApp } from 'vue'
import App from './App.vue'
import lazyPlugin from 'vue3-lazy'

import router from './router'
import store from './store'
import loadingDirective from '@/components/base/loading/directive'
import noResultDirective from '@/components/base/no-result/directive'
import defaultImage from '@/assets/images/default.png'
import '@/assets/scss/index.scss'

createApp(App)
  .use(router)
  .use(store)
  .use(lazyPlugin, {
    loading: defaultImage,
  })
  .directive('loading', loadingDirective)
  .directive('no-result', noResultDirective)
  .mount('#app')
