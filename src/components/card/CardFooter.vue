<template>
  <div class="card__footer">
    <div class="footer__user">
      <slot name="card-user"></slot>
      <div class="date_started">
        12-14 Jul
      </div>
    </div>
    <div class="footer__actions">
      <slot name="card-actions"></slot>
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
