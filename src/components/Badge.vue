<template>
  <span
    class="badges"
    :class="[getClass]"
  >

    {{ title }}

    <div
      v-if="deletable"
      class="badges__button"
      @click="$emit('on-remove')"
    >
      <i class="fa-solid fa-circle-xmark"> </i>
    </div>

  </span>
</template>

<script>
export default {
  name: 'BadgeComponent',

  props: {
    title: {
      type: String,
      default: ''
    },
    deletable: {
      type: Boolean,
      default: false
    }
  },

  emits: ['on-remove'],

  computed: {
    getClass () {
      return this.title.trim().toLowerCase().replace(' ', '__')
    }
  }
}
</script>

<style lang="scss" scoped>
.badges {
    padding: 5px 10px;
    border-radius: 8px;
    font-size: 16px;
    margin-right: 10px;
    display: inline-block;
    margin-bottom: 10px;

    div {
        display: inline;
        cursor: pointer;
    }
}

.badges:last-child{margin-right: 0;}

.low {
    background: #50D5F6;
}

.medium {
    background: #FCA821;
}

.high{
    background: #9F45E2;
}

.at__risk{
    background: #FED02C;
}

.on__track{
    background: #1FCEC2;
}

.off__track{
    background: #F95878;
}

.low, .medium, .at__risk, .on__track{color: #191919;}
.high, .off__track{color: #fff;}

</style>
