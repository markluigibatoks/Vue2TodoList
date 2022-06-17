<template>
  <div class="card__title">
    <div class="card__title__prepend">
      <slot name="title-prepend"></slot>
    </div>
    <slot name="title-body"></slot>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  @import './styles/CardTitle.scss';
</style>
