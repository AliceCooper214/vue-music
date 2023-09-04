import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import lazyPlugin from "vue3-lazy";
import loadingDirective from "@/components/base/loading/directive";
import defaultImage from "@/assets/images/default.png";
import "@/assets/scss/index.scss";

createApp(App)
  // .use(store)
  .use(router)
  .use(lazyPlugin, {
    loading: defaultImage,
  })
  .directive("loading", loadingDirective)
  // .directive("no-result", noResultDirective)
  .mount("#app");
