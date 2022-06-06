<template>
    <div class="todos">
        <!-- To do -->
        <!-- <TodoHeader :group="group"/> -->
        <TodoHeader :group="title"/>


        <!-- List of Cards here -->
        <div 
          class="card__list" 
          v-for="todo in todos" :keys="todo.id">
            <Card :todo="todo"/>
        </div>


        <TodoFooter :hasTodos="todos !== undefined"/>
    </div>
</template>

<script>
import TodoHeader from './TodoHeader.vue';
import Card from './Card.vue';
import TodoFooter from './TodoFooter.vue';
    export default {
    name: "Todo",
    components: { TodoHeader, Card, TodoFooter },
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