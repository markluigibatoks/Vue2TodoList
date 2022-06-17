<template>
  <div
    class="card"
    @dragstart="dragStart($event)"
  >
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
  name: 'BaseCard',

  methods: {
    dragStart (e) {
      const target = e.target
      console.log('todoId', target.id)
      e.dataTransfer.setData('card_id', target.id)
    }
  }
}
</script>

<style scoped>
  @import './styles/Card.scss';
</style>
