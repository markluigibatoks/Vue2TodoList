const state = {
    todos: [],
}

const getters = {
    allTodos: (state) => state.todos,

    todosByGroup: (state) => {
      const group = {
        todo: [],
        doing: [],
        done: [],
        dynamic: []
      }

      state.todos.forEach(curr => {
        if (!group[curr.group]) {
          group[curr.group] = []
        }

        group[curr.group].push(curr)
      })
      
      return group
    }

}

const actions = {
    async fetchTodos ({commit}) {
        let response = localStorage.getItem('todos')
        let todos = JSON.parse(response)

        commit('setTodos', todos)
    }
}

const mutations = {
    setTodos: (state, todos) => state.todos = todos
}

export default {
    state,
    getters,
    actions,
    mutations
}