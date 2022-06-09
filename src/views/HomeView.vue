<template>
  <div class="wrapper">
    <div class="content">
      <template
        v-for="(group, groupKey) in todosByGroup"
        :keys="groupKey"
      >
        <Todos
          :todos="group"
          :title="groupKey"
        />
      </template>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from '@/components/Todos.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HomeView',

  data () {
    return {
      todos: []
    }
  },

  methods: {
    ...mapActions(['fetchTodos'])
  },

  components: {
    Todos
  },

  created () {
    this.fetchTodos()
  },

  computed: {
    ...mapGetters(['allTodos', 'todosByGroup'])
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
