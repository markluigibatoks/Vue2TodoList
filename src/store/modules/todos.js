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
  fetchTodos ({commit}) {
    let response = localStorage.getItem('todos')
    let todos = response != null ? JSON.parse(response) : []

    commit('setTodos', todos)
  },

  addNewTodo({commit}, group){
    console.log(group)

    const todo = {
      title: '',
      badges: [],
      person: Math.floor(Math.random() * 70 + 1),
      group: group,
      order: 1,
    }

    commit('addTodo', todo);
  }
}

const mutations = {
  setTodos: (state, todos) => state.todos = todos,

  addTodo: (state, todo) => state.todos.unshift(todo)
}

export default {
    state,
    getters,
    actions,
    mutations
}