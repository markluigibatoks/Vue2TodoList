<template>
  <div class="card__footer">
    <div class="footer__user">
      <img :src="imageSrc">
      <div class="date_started">
        12-14 Jul
      </div>
    </div>
    <div class="footer__other">
      2 <i class="fa-solid fa-code-merge"></i> <i class="fa-solid fa-play"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardFooter',
  props: {
    personId: {
      type: Number,
      default: -1
    }
  },
  data () {
    return {
      baseUrl: 'https://i.pravatar.cc/150?img='
    }
  },
  computed: {
    imageSrc () {
      return this.baseUrl + this.personId
    }
  }
}
</script>
<style lang="scss" scoped>
  @import './styles/CardFooter.scss';
</style>
