<template>
  <div class="card__header">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    defaultText: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      editField: '',
      title: '',
      typingTimer: '',
      doneTypingInterval: 2500
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './styles/CardHeader.scss'
</style>
