<template>
  <div class="card__header">
    <div class="card__title">
      <div class="card__title__prepend">
        <i class="fa-regular fa-circle-check"></i>
      </div>
      <span
        v-show="!showField('title')"
        @click="focusField('title')"
      >{{ title }}</span>
      <input
        v-show="showField('title')"
        v-model="title"
        type="text"
        @focus="focusField('title')"
        @blur="blurField"
        @input="handleOnInput"
      >
    </div>
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
  emits: [
    'handle-change-text'
  ],
  data () {
    return {
      editField: '',
      title: '',
      typingTimer: '',
      doneTypingInterval: 2500
    }
  },
  created () {
    this.title = this.defaultText
  },
  methods: {

    showField (name) {
      return this.editField === name || this.title === ''
    },

    focusField (name) { // name of input field
      this.editField = name
    },

    blurField () {
      this.editField = ''
    },

    handleOnInput () {
      clearTimeout(this.typingTimer)

      if (this.title !== this.defaultText) { // if input title has changes
        this.typingTimer = setTimeout(() => this.$emit('handle-change-text', this.title), this.doneTypingInterval)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './styles/CardHeader.scss'
</style>
