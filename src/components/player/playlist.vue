<template>
  <div class="playlist"></div>
</template>

<script>
export default {
  name: 'playlist',
  setup() {
    function show() {
      console.log('show')
    }

    return {
      show,
    }
  },
}
</script>
