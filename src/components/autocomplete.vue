<template>
  <div
    class="autocomplete"
    tabindex="0"
    @click="focusInput()"
    @focus="showList = true"
    @blur="showList = false"
  >
    <label for="input_text">Select</label>
    <div class="selections">
      <span
        v-for="(item, index) in selectedItems"
        :key="index"
        class="chip"
      >
        {{item}}
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
        @focus="showList = true"
        @blur="showList = false"
        @keydown.delete="handleKeydownDelete"
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
        @click="selectItem(item)"
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
      // required: true,
      default () {
        return [
          'Chip 1', 'Chip 2', 'Chip 3', 'Chip 4', 'Chip 5'
        ]
      }
    }
  },

  data () {
    return {
      clonedItems: [],
      showList: false,
      query: '',
      result: [],
      selectedItems: [],
      prevQuery: ''
    }
  },

  computed: {
    getFilteredResults () {
      return this.result.filter(item => item.toLowerCase().includes(this.query.trim().toLowerCase())).sort()
    }
  },

  created () {
    if (this.items !== undefined) {
      this.clonedItems = [...this.items]
      this.result = [...this.items]
    }
  },

  methods: {
    focusInput () {
      this.$refs.input.focus()
    },

    removeSelectedItem (item) {
      this.spliceArray(item, this.selectedItems)
      this.result.push(item)
    },

    spliceArray (item, array) {
      const idx = array.indexOf(item)
      array.splice(idx, 1)
    },

    selectItem (item) {
      this.spliceArray(item, this.result)
      this.selectedItems.push(item)
    },

    handleKeydownDelete () {
      console.log(this.query, this.query.length > 0)
      if (this.selectedItems.length > 0 && !this.query.length > 0) {
        this.result.push(this.selectedItems.pop())
      }
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.autocomplete {
  width: 100%;
  background: skyblue;
  cursor: text;
  position: relative;
  padding: 8px;
  border-radius: 8px;

  .dropdown-button {
    position: absolute;
    top: 8px;
    right: 8px;
    transition: 0.5s;
  }

  .dropdown-button.show-list {
    transform: rotate(180deg);
  }

  label {
    font-size: 16px;
    opacity: 0.7;
    margin-bottom: 8px;
    display: block;
  }

  .selections {
    position: relative;

    span.chip {
      border-radius: 30px;
      background: #555;
      padding: 4px 36px 4px 16px;
      color: #fff;
      display: inline-block;
      margin-right: 8px;
      position: relative;

      .close-button {
        display: block;
        cursor: pointer;
        position: absolute;
        top: 50%;
        right: 8px;
        transform: translateY(-50%);
      }

      .close-button:hover {
        color: rgb(218, 218, 218);
      }
    }

    input {
      outline: none;
      border: none;
      background: none;
    }
  }

  .list {
    list-style: none;
    background: #fff;
    border-bottom: 1px solid #ddd;

    li {
      padding: 15px 10px;
      cursor: pointer;
    }

    li:nth-child(odd) {
      background: #fff;
    }

    li:nth-child(even) {
      background: #ddd;
    }

    li:hover {
      background: skyblue;
    }
  }
}
</style>
