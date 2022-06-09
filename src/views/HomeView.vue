<template>
  <div class="wrapper">
    <div class="content">
      <Todos
        v-for="(group, groupKey) in todosByGroup"
        :key="groupKey"
        :todos="group"
        :title="groupKey"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from '@/components/Todos.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HomeView',

  components: {
    Todos
  },

  data () {
    return {
      todos: []
    }
  },

  computed: {
    ...mapGetters(['allTodos', 'todosByGroup'])
  },

  created () {
    this.fetchTodos()
  },

  methods: {
    ...mapActions(['fetchTodos'])
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
