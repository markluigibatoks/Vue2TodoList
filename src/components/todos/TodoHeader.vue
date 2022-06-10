<template>
  <div class="todo__header">
    <div class="header__title">
      {{ group }}
    </div>
    <div class="header__actions">
      <button><i class="fa-solid fa-circle-plus"></i></button>
      <button><i class="fa-solid fa-ellipsis"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoHeader',
  props: {
    group: {
      type: String,
      default: 'dynamic'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './styles/TodoHeader.scss';
</style>
