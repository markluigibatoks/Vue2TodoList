<template>
  <div
    class="card"
    draggable="true"
    @dragstart="dragStart($event)"
  >
    <CardHeader
      :default-text="title"
      @handle-change-text="doneTyping"
    />

    <div class="card__body">
      <div class="card__badges">
        <Autocomplete
          :items="todo.badges"
          @selected-items="changeBadges"
        />
      </div>
    </div>

    <CardFooter
      @handle-click-event="onDeleteTodo"
    >
      <img :src="imageSrc">
    </CardFooter>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Autocomplete from '../autocomplete/Autocomplete.vue'
import CardFooter from './CardFooter.vue'
import CardHeader from './CardHeader.vue'

export default {
  name: 'BaseCard',
  components: {
    Autocomplete,
    CardFooter,
    CardHeader
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
      baseUrl: 'https://i.pravatar.cc/150?img='
    }
  },

  computed: {
    imageSrc () {
      return this.baseUrl + this.todo.person
    }
  },

  created () {
    this.title = this.todo.title
  },

  methods: {
    ...mapActions(['updateTodo', 'deleteTodo']),

    doneTyping (str) {
      console.log('User done typing!!!')
      this.updateTodo({
        id: this.todo.id, title: str
      })
    },

    changeBadges (e) {
      console.log(e)
      this.updateTodo({
        id: this.todo.id, badges: e
      })
    },

    onDeleteTodo () {
      if (confirm('Continue deleting the todo?')) {
        this.deleteTodo({ id: this.todo.id })
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
