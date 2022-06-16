<template>
  <div class="card__footer">
    <div class="footer__user">
      <slot></slot>
      <div class="date_started">
        12-14 Jul
      </div>
    </div>
    <div class="footer__actions">
      <button
        class="deleteTodoButton"
        title="Delete Card"
        @click="$emit('handle-click-event')"
      >
        <div class="button__body">
          <i class="fa-solid fa-trash"></i>
        </div>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardFooter',
  emit: [
    'handle-click-event'
  ]
}
</script>
<style lang="scss" scoped>
  @import './styles/CardFooter.scss';
</style>
