<template>
  <div class="wrapper">
      <div class="content">
        
        <!-- <TodoForm @on-close="closeForm" v-if="showForm" :group="groupForForm" @new-todo="addTodo"/> -->

        <template v-for="(group, groupKey) in todosByGroup" :keys="groupKey">
          <Todos :todos="group" :title="groupKey"/>
        </template>

      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from '@/components/Todos.vue'

import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'HomeView',

  data() {
    return {
      showForm : false,
      groupForForm: 'untitled',
      todos: [],
    }
  },

  methods: {
    ...mapActions(["fetchTodos"]),

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
  },

  created(){ 
    this.fetchTodos()
  },

  computed: {
    ...mapGetters (["allTodos", "todosByGroup"]),
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
