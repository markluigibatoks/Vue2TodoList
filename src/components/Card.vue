<template>
  <div
    class="card"
    draggable="true"
    @dragstart="dragStart($event)"
  >
    <div class="card__header">
      <div class="card__title">
        <div class="card__title__prepend">
          <i class="fa-regular fa-circle-check"></i>
          <!-- <i class="fa-regular fa-hourglass"></i> -->
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
        >
      </div>
    </div>

    <div class="card__body">
      <div class="card__badges">
        <Badge
          v-for="(badge, index) in filterBadges"
          :key="index"
          :title="badge.name"
          :deletable="showAutocomplete"
          @on-remove="onRemove(badge)"
        />

        <div
          v-if="showAutocomplete"
          class="autocomplete"
        >
          <div class="badge-group">
            <div class="badge-group__input">
              <input
                id="searchTxt"
                v-model="searchTxt"
                type="text"
                placeholder="Search for a badge..."
                @focus="showAutocomplete = true"
              >
            </div>
          </div>
          <ul
            class="badge-list"
          >
            <li
              v-for="(badge, index) in searchResults"
              :key="index"
              class="badge-list__item"
              @click="selectBadge(badge)"
            >
              {{ badge.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="card__footer">
      <div class="footer__user">
        <img :src="imageSrc">
        <div class="date_started">
          12-14 Jul
        </div>
      </div>
      <div class="footer__actions">
        <button
          class="deleteTodoButton"
          title="Delete Card"
          @click="onDeleteTodo"
        >
          <div class="button__body">
            <i class="fa-solid fa-trash"></i>
          </div>
        </button>

        <button
          class="showAutocomplete"
          @click="showAutocomplete = !showAutocomplete"
        >
          <div class="button__body">
            <i class="fa-solid fa-dragon"></i>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Badge from './Badge.vue'
import { mapActions } from 'vuex'

export default {
  name: 'CardComponent',
  components: {
    Badge
  },

  props: {
    todo: {
      type: Object,
      default () {
        return { }
      }
    }
  },

  data () {
    return {
      title: '',
      editField: '',
      showAutocomplete: false,
      typingTimer: '',
      doneTypingInterval: 2500,
      baseUrl: 'https://i.pravatar.cc/150?img=',

      defaultBadges: [],
      searchResults: [],
      searchTxt: ''
    }
  },

  computed: {
    imageSrc () {
      return this.baseUrl + this.todo.person
    },

    filterResults () {
      return this.defaultBadges.filter(badge => !badge.selected)
    },

    filterBadges () {
      return this.defaultBadges.filter(badge => badge.selected)
    },

    getAllSelectedBadges () {
      const badges = []
      this.defaultBadges.forEach(curr => {
        if (curr.selected) {
          badges.push(curr.name)
        }
      })

      return badges
    }
  },

  watch: {
    title () {
      clearTimeout(this.typingTimer)

      if (this.title !== this.todo.title) { // if input title has changes
        this.typingTimer = setTimeout(this.doneTyping, this.doneTypingInterval)
      }
    },

    searchTxt (newValue) {
      this.searchResults = this.defaultBadges.filter(badge => badge.name.toLowerCase().includes(newValue.trim().toLowerCase()) && !badge.selected)
    },

    defaultBadges () {
      this.searchResults = this.filterResults
    }
  },

  created () {
    this.title = this.todo.title
    this.defaultBadges = [
      { name: 'Low', selected: false },
      { name: 'Medium', selected: false },
      { name: 'High', selected: false },
      { name: 'On Track', selected: false },
      { name: 'Off Track', selected: false },
      { name: 'At Risk', selected: false }
    ]

    this.todo.badges.forEach(badge => {
      const i = this.defaultBadges.findIndex(b => b.name === badge)
      this.defaultBadges[i].selected = true
    })
  },

  methods: {
    ...mapActions(['updateTodo', 'deleteTodo']),

    focusField (name) { // name of input field
      this.editField = name
    },

    onRemove (badge) {
      this.defaultBadges = this.defaultBadges.map(b => b === badge ? { ...b, selected: false } : b)
      this.changeBadges()
    },

    blurField () {
      this.editField = ''
    },

    showField (name) {
      return this.editField === name || this.title === ''
    },

    doneTyping () {
      console.log('User done typing!!!')
      this.updateTodo({
        ...this.todo, title: this.title
      })
    },

    changeBadges () {
      this.updateTodo({
        ...this.todo, badges: this.getAllSelectedBadges
      })
    },

    onDeleteTodo () {
      if (confirm('Continue deleting the todo?')) {
        this.deleteTodo(this.todo)
      }
    },

    selectBadge (badge) {
      this.defaultBadges = this.defaultBadges.map(b => b === badge ? { ...b, selected: true } : b)

      this.searchTxt = ''
      this.show = false

      this.showAutocomplete = false

      this.changeBadges()
    },

    dragStart (e) {
      const target = e.target
      e.dataTransfer.setData('card_id', target.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #dadada;
  width: 100%;
  min-height: 183px;
  margin-bottom: 20px;
  padding-bottom: 80px;
  position: relative;
}

.card__body{
  display: block;
  min-height: 80px;
  cursor: pointer;

  .card__badges {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}

.card__header {

  .card__title {
    display: flex;
    align-items: center;
    font-weight: bold;
    color: #191919;
    margin-bottom: 10px;

    .card__title__prepend {
      font-size: 24px;
      margin-right: 10px;
    }

    span {
      display: inline-block;
      width: 241px;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: left;
      font-size: 20px;
      white-space: nowrap;
    }
  }
}

.card__footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ADADAD;
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: calc(100% - 40px);

  .footer__user {
  display: flex;
  justify-content: flex-start;
  align-items: center;

    img{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-right: 10px;
    }
  }

  .footer__actions {
    button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 18px;
    }

    button:hover{
      opacity: 0.7
    }

    .deleteTodoButton{
      color: red;
    }
  }
}

.autocomplete {
  position: relative;

.badge-group {

  .badge-group__input {
    input {
      width: 100%;
      font-size: inherit;
      border: none;
      border-bottom: 1px solid #000;
      background: none;
      padding: 10px;
    }
  }
}

.badge-list {
  list-style: none;
  text-align: left;
  background: #fff;
  padding: 0;
  margin-top: 0;
  width: 100%;
  position: absolute;
  top: 40px;
  left: 0;
  background: #fff;
  z-index: 1;

  li {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
  }

  li:hover {
    background: #000;
    color: #fff;
  }

  li:last-child {
    border-bottom: none;
  }
}

.selected-badges {
  padding: 0 0 30px;
}
}
</style>
