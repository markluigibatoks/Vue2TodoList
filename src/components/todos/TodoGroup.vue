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
      <BaseCard
        :id="todo.id"
        :todo="todo"
      />
    </div>

    <TodoFooter
      :class="{no__child: !todos.length}"
      @handle-click-event="addNewTodo(title)"
    />
  </div>
</template>

<script>
import TodoHeader from './TodoHeader.vue'
import TodoFooter from './TodoFooter.vue'
import BaseCard from '../card/BaseCard.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TodoComponent',

  components: {
    TodoHeader,
    BaseCard,
    TodoFooter
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
