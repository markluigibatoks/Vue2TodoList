<template>
  <img
    :src="src"
    :style="{ color: color, height: size + 'px', width: size + 'px'}"
    :class="{rounded: rounded}"
  >
</template>

<script>
export default {
  name: 'ImageView',

  props: {
    src: {
      type: String,
      default: '',
      required: true
    },
    size: {
      type: Number,
      default: 48
    },
    rounded: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  img {
    border-radius: 50%;
  }
</style>
