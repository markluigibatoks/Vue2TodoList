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
        <Autocomplete
          :items="todo.badges"
          @selected-items="changeBadges"
        />
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Autocomplete from '../autocomplete/Autocomplete.vue'

export default {
  name: 'CardComponent',
  components: {
    Autocomplete
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
      typingTimer: '',
      doneTypingInterval: 2500,
      baseUrl: 'https://i.pravatar.cc/150?img='
    }
  },

  computed: {
    imageSrc () {
      return this.baseUrl + this.todo.person
    }
  },

  watch: {
    title () {
      clearTimeout(this.typingTimer)

      if (this.title !== this.todo.title) { // if input title has changes
        this.typingTimer = setTimeout(this.doneTyping, this.doneTypingInterval)
      }
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

    changeBadges (e) {
      // console.log(e)
      this.updateTodo({
        ...this.todo, badges: e
      })
    },

    onDeleteTodo () {
      if (confirm('Continue deleting the todo?')) {
        this.deleteTodo(this.todo)
      }
    },

    dragStart (e) {
      const target = e.target
      e.dataTransfer.setData('card_id', target.id)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './styles/Card.scss';
</style>
