<template>
  <div
    class="autocomplete"
    @click="focusInput()"
  >
    <label for="input_text">Select</label>
    <div class="selections">
      <span
        v-for="(item, index) in selectedItems"
        :key="index"
        class="chip"
      >
        {{ item }}
        <div
          class="close-button"
          @click="removeSelectedItem(item)"
        >
          <i class="fa-solid fa-circle-xmark"></i>
        </div>
      </span>

      <input
        id="input_text"
        ref="input"
        v-model="query"
        type="text"
        autocomplete="off"
        @keydown.delete="handleKeydownDelete"
        @focus="showList = true"
      >
    </div>

    <ul
      v-show="showList"
      class="list"
    >
      <li
        v-for="(item, index) in getFilteredResults"
        :key="index"
        class="list__item"
        @click.prevent.stop="selectItem(item)"
      >
        {{ item }}
      </li>
    </ul>

    <div
      class="dropdown-button"
      :class="{ 'show-list': showList }"
    >
      <i class="fa-solid fa-caret-down"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AutoComplete',

  props: {
    items: {
      type: Array,
      required: true,
      default: () => ([])
    }
  },

  emits: ['selected-items'],

  data () {
    return {
      defaultResults: ['Low', 'Medium', 'High', 'At Risk', 'Off Track', 'On Track'],
      showList: false,
      query: '',
      selectedItems: []
    }
  },

  computed: {
    getFilteredResults () {
      const query = this.query.trim().toLowerCase()

      return this.notSelectedItems.filter(item => item.toLowerCase().includes(query)).sort()
    },

    notSelectedItems () {
      return this.defaultResults.filter(defs => !this.selectedItems.includes(defs))
    }
  },

  created () {
    if (this.items !== undefined) {
      this.selectedItems = [...this.items]
    }
  },

  methods: {
    focusInput () {
      this.$refs.input.focus()
    },

    emitSelectedItems () {
      this.$emit('selected-items', this.selectedItems)
    },

    removeSelectedItem (item) {
      this.spliceArray(item, this.selectedItems)

      this.emitSelectedItems()
    },

    spliceArray (item, array) {
      const idx = array.indexOf(item)
      array.splice(idx, 1)
    },

    selectItem (item) {
      // this.spliceArray(item, this.result)
      this.selectedItems.push(item)
      this.showList = false
      this.emitSelectedItems()
    },

    handleKeydownDelete () {
      this.selectedItems.pop()

      this.emitSelectedItems()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './styles/Autocomplete.scss'
</style>
