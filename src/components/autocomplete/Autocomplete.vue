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
        :class="kebab(item)"
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
      defaultResults: ['Low', 'Medium', 'High', 'On Track', 'At Risk', 'Off Track'],
      showList: false,
      query: '',
      selectedItems: []
    }
  },

  computed: {
    getFilteredResults () {
      const query = this.query.trim().toLowerCase()

      return this.notSelectedItems.filter(item => item.toLowerCase().includes(query))
    },

    notSelectedItems () {
      return this.defaultResults.filter(defs => !this.selectedItems.includes(defs))
    }
  },

  created () {
    if (this.items !== undefined && this.items[0] !== null) {
      // -1 because table id starts with 1
      // array indexes starts at 0
      this.selectedItems = this.items.map(item => this.defaultResults[item - 1])
    }
  },

  methods: {
    kebab (str) {
      return str.replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase()
    },

    focusInput () {
      this.$refs.input.focus()
    },

    emitSelectedItems () {
      // +1 to items to match the database counting
      this.$emit('selected-items', this.selectedItems.map(item => this.defaultResults.indexOf(item) + 1))
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
