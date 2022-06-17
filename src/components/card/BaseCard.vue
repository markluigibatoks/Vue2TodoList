<template>
  <div class="card">
    <slot name="card-header">
      Header
    </slot>
    <slot name="card-body">
      Body
    </slot>
    <slot name="card-footer">
      Footer
    </slot>
  </div>
</template>

<script>
export default {
  name: 'BaseCard'
}
</script>

<style scoped>
  @import './styles/Card.scss';
</style>
