<template>
  <div class="wrapper">
      <div class="content">
      
        <template v-for="(group, groupKey) in todosByGroup" :keys="groupKey">
          <Todos :todos="group" :title="(groupKey === 'regular') ? 'To do' : groupKey"/>
        </template>

        <Todos title="Untitled" v-if="!Object.keys(todosByGroup).includes('untitled')"/>
      
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from '@/components/Todos.vue'


export default {
  name: 'HomeView',

  components: {
    Todos,
  },
  computed: {
    todosByGroup () {
      return  this.$store.getters.todosByGroup;
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
