<template>
    <div class="todos">
        <TodoHeader :group="title.toUpperCase()"/>

        <div 
          class="card__list" 
          v-for="todo in todos" :keys="todo.id">
            <Card :todo="todo"/>
        </div>

        <TodoFooter :hasTodos="todos.length > 0" @on-new-todo="$emit('on-new-todo')"/>
    </div>
</template>

<script>
import TodoHeader from './TodoHeader.vue';
import Card from './Card.vue';
import TodoFooter from './TodoFooter.vue';
    export default {
    name: "Todo",

    emit: ['on-new-todo'],

    components: { 
      TodoHeader, 
      Card, 
      TodoFooter },

    props: {
      todos: [],
      title: String, 
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
</style>