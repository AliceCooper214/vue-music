import {
  h,
  mergeProps,
  withCtx,
  renderSlot,
  ref,
  computed,
  watch,
  nextTick,
} from "vue";
import Scroll from "@/components/base/scroll/scroll";

export default {
  name: "wrap-scroll",
  props: Scroll.props,
  props: Scroll.emits,
  render(ctx) {
    return h(
      Scroll,
      mergeProps(
        {
          ref: "scrollRef",
        },
        ctx.$props,
        {
          onScroll: (e) => {
            ctx.$emit("scroll", e);
          },
        }
      ),
      {
        default: withCtx(() => {
          return [renderSlot(ctx.$slots, "default")];
        }),
      }
    );
  },
  setup() {
    const scrollRef = ref(null);
    const scroll = computed(() => {
      return scrollRef.value.scroll;
    });

    return {
      scrollRef,
      scroll,
    };
  },
};
