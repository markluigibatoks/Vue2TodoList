<template>
  <div class="editable-text">
    <span
      v-show="!showField('value')"
      @click="focusField('value')"
    >{{ value }}</span>
    <input
      v-show="showField('value')"
      v-model="modelValue"
      type="text"
      @focus="focusField('value')"
      @blur="blurField"
    >
  </div>
</template>

<script>
export default {
  name: 'EditableText',

  props: {
    value: {
      type: String,
      default: '',
      required: true
    }
  },

  data () {
    return {
      editField: ''
    }
  },

  computed: {
    modelValue: {
      set (val) {
        this.$emit('on-change', val)
      },

      get () {
        return this.value
      }
    }
  },

  methods: {
    showField (name) {
      return this.editField === name || this.value === ''
    },

    focusField (name) {
      this.editField = name
    },

    blurField () {
      this.editField = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './styles/EditableText.scss'
</style>
