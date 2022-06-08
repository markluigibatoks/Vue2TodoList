<template>
    <div class="todos">
        <TodoHeader :group="getTitle.toUpperCase()"/>

        <div 
          class="card__list" 
          v-for="todo in todos" :keys="todo.id">
            <Card :todo="todo"/>
        </div>

        <div class="todo__footer">
            <div 
                class="footer__actions" 
                :class="{no__child: !todos.length > 0}"
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
import TodoHeader from './TodoHeader.vue';
import Card from './Card.vue';
import {mapActions} from 'vuex';

export default {
  name: "Todo",

  components: { 
    TodoHeader, 
    Card, 
  },

  props: {
    todos: [],
    title: String,
  },

  computed: {
    getTitle(){
      if(this.title === 'todo')  return 'To do' 
      else if(this.title === 'dynamic') return 'Untitled'
      else return this.title
    }
  },

  methods: {
    ...mapActions(['addNewTodo']),
  }
}
</script>

<style lang="scss" scoped>
.todos {
    width: calc(100% / 4);
    margin-right: 20px;

    .card__list{
      display: flex;
      flex-direction: column;
    }
  }

  .todos:last-child{margin-right: 0;}

  .todo__footer {
  .footer__actions {
    .button {
      width: 100%;
      height: 45px;
      background: #F9F9F9;
      color: #191919;
      border: 1px dashed #adadad;
      border-radius: 12px;
      font-weight: 600;
      display: flex;
      align-items: center; 
      justify-content: center;
      cursor: pointer;

      .button__prepend {
        font-size: 18px;
        margin-right: 10px;
      }
    }
  }
}

.no__child{
  button {
    min-height: 183px;
    font-size: 18px;
    border: none !important;
  }
}
</style>