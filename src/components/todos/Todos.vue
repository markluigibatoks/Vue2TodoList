<template>
  <div
    class="todos"
    @drop.prevent="drop"
    @dragover.prevent
  >
    <TodoHeader :group="getTitle.toUpperCase()" />

    <div
      v-for="todo in todos"
      :key="todo.id"
      class="card__list"
    >
      <Card
        :id="todo.id"
        :todo="todo"
      />
    </div>

    <div class="todo__footer">
      <div
        class="footer__actions"
        :class="{no__child: !todos.length}"
      >
        <button
          class="button"
          @click="addNewTodo(title)"
        >
          <div class="button__prepend">
            <i class="fa-solid fa-circle-plus"></i>
          </div>
          Add Task
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from './TodoHeader.vue'
import Card from '../card/Card.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TodoComponent',

  components: {
    TodoHeader,
    Card
  },

  props: {
    todos: {
      type: Array,
      default () {
        return []
      }
    },
    title: {
      type: String,
      default: ''
    }
  },

  computed: {
    getTitle () {
      if (this.title === 'todo') return 'To do'
      else if (this.title === 'dynamic') return 'Untitled'
      return this.title
    }
  },

  methods: {
    ...mapActions(['addNewTodo', 'updateTodo']),
    ...mapGetters(['allTodos']),

    drop (e) {
      const todoId = Number(e.dataTransfer.getData('card_id'))
      this.updateTodo({ id: todoId, group: this.title })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './styles/Todos.scss';
</style>
