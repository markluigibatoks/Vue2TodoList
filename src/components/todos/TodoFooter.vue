<template>
  <div class="todo__footer">
    <div
      class="footer__actions"
    >
      <button
        class="button"
        @click="$emit('handle-click-event')"
      >
        <div class="button__prepend">
          <i class="fa-solid fa-circle-plus"></i>
        </div>
        Add Task
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoFooter',
  emits: [
    'handle-click-event'
  ]
}
</script>

<style lang="scss" scoped>
  @import './styles/TodoFooter.scss'
</style>
