<template>
  <div class="wrapper">
      <div class="content">
        
        <TodoForm @on-close="closeForm" v-if="showForm" :group="groupForForm" @new-todo="addTodo"/>

        <template v-for="(group, groupKey) in todosByGroup" :keys="groupKey">
          <Todos :todos="group" :title="(groupKey === 'regular') ? 'To do' : groupKey" @on-new-todo="openForm(groupKey)"/>
        </template>

        <Todos title="Untitled" v-if="!Object.keys(todosByGroup).includes('untitled')" @on-new-todo="openForm('untitled')"/>
      
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from '@/components/Todos.vue'
import TodoForm from '@/components/TodoForm.vue';


export default {
  name: 'HomeView',

  data() {
    return {
      showForm : false,
      groupForForm: 'untitled',
      todos: [],
    }
  },

  created(){
    let parsedTodos = JSON.parse(localStorage.getItem('todos')) || []
    this.todos = parsedTodos
  },

  methods: {
    toggleForm(){
      this.showForm = !this.showForm
    },

    closeForm(){
      this.toggleForm()
    },

    openForm(group){
      if(this.showForm){
        console.log('A form is open.');
        return;
      }

      this.toggleForm()
      
      this.groupForForm = group
    },
    
    addTodo(todo){
      this.todos.push(todo)
    }
  },

  components: {
    Todos,
    TodoForm
  },

  computed: {
    todosByGroup() {
      const group = {}

      this.todos.forEach(curr => {
        if (!group[curr.group]) {
          group[curr.group] = []
        }

        group[curr.group].push(curr)
      })

      return group
    }
  },

  watch: {
    todos(newValue, oldValue){
      localStorage.setItem('todos', JSON.stringify(newValue))
    }
  }
}
</script>

<style scope lang="scss">
  .wrapper {
    max-width: 1375px;
    margin: 0 auto;

    .content {
      display: flex;
      justify-content: space-between;
    }
  }

  
</style>
