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
        draggable="true"
      >
        <template #card-header>
          <CardHeader>
            <CardTitle>
              <template #title-prepend>
                <i class="fa-regular fa-circle-check"></i>
              </template>
              <template #title-body>
                <EditableText
                  v-model="todo.title"
                  @on-change="handleOnInput($event, todo.id)"
                />
              </template>
            </CardTitle>
          </CardHeader>
        </template>
        <template #card-body>
          <CardBody>
            <Autocomplete
              :items="todo.badges"
              :default-results="defaultResults"
              @selected-items="changeBadges($event, todo.id)"
            />
          </CardBody>
        </template>
        <template #card-footer>
          <CardFooter>
            <template #card-user>
              <ImageView :src="`${baseUrl + todo.person}`" />
            </template>
            <template #card-actions>
              <button
                class="deleteTodoButton"
                title="Delete Card"
                @click="onDeleteTodo(todo.id)"
              >
                <div class="button__body">
                  <i class="fa-solid fa-trash"></i>
                </div>
              </button>
            </template>
          </CardFooter>
        </template>
      </BaseCard>
    </div>

    <TodoFooter
      :class="{no__child: !todos.length}"
      @handle-click-event="addNewTodo(groupName)"
    />
  </div>
</template>

<script>
import TodoHeader from './TodoHeader.vue'
import TodoFooter from './TodoFooter.vue'
import BaseCard from '../card/BaseCard.vue'
import { mapActions, mapGetters } from 'vuex'
import CardHeader from '../card/CardHeader.vue'
import CardTitle from '../card/CardTitle.vue'
import CardBody from '../card/CardBody.vue'
import CardFooter from '../card/CardFooter.vue'
import EditableText from '../card/EditableText.vue'
import Autocomplete from '../autocomplete/Autocomplete.vue'
import ImageView from '../card/ImageView.vue'

export default {
  name: 'TodoComponent',

  components: {
    TodoHeader,
    BaseCard,
    CardHeader,
    CardTitle,
    CardBody,
    CardFooter,
    TodoFooter,
    EditableText,
    Autocomplete,
    ImageView
  },

  props: {
    todos: {
      type: Array,
      default () {
        return []
      }
    },
    groupName: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      cardTitle: '',
      typingTimer: '',
      doneTypingInterval: 2500,
      baseUrl: 'https://i.pravatar.cc/150?img=',
      defaultResults: ['Low', 'Medium', 'High', 'On Track', 'At Risk', 'Off Track']
    }
  },

  computed: {

    getTitle () {
      if (this.groupName === 'todo') return 'To do'
      else if (this.groupName === 'dynamic') return 'Untitled'
      return this.groupName
    }
  },

  methods: {
    ...mapActions(['addNewTodo', 'updateTodo', 'deleteTodo']),
    ...mapGetters(['allTodos']),

    drop (e) {
      const todoId = Number(e.dataTransfer.getData('card_id'))
      this.updateTodo({ id: todoId, group: this.groupName })
    },

    handleOnInput (value, id) {
      clearTimeout(this.typingTimer)

      this.typingTimer = setTimeout(this.doneTyping(value, id), this.doneTypingInterval)
    },

    onDeleteTodo (id) {
      if (confirm('Continue deleting the todo?')) {
        this.deleteTodo({ id: id })
      }
    },

    changeBadges (e, id) {
      this.updateTodo({
        id: id, badges: e
      })
    },

    doneTyping (value, id) {
      console.log('User done typing!!!')
      this.updateTodo({
        id: id, title: value
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './styles/Todos.scss';
</style>
