import axios from 'axios'

export default {
  state: {
    todos: [],
    enumBadges: [
      'Low',
      'Medium',
      'High',
      'On Track',
      'At Risk',
      'Off Track'
    ]
  },
  getters: {
    allTodos: state => state.todos,

    todosByGroup: state => {
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
  },
  mutations: {
    setTodos: (state, todos) => {
      state.todos = todos
    },
    newTodo: (state, todo) => {
      // Ilisan ni siya ug katong state.todos.push(todo)
      state.todos.push(todo)
    },
    updateTodo: (state, params) => {
      state.todos = state.todos.map(todo => todo.id === params.id ? { ...todo, ...params } : todo)
    }
  },

  actions: {
    async fetchTodos ({ commit }) {
      // const response = localStorage.getItem('todos')
      // const response = await axios.patch('/todos/', { id: 18 })
      // const todos = response != null ? JSON.parse(response) : []
      const response = await axios.get('/todos/')
      console.log(response)
      const todos = response.data.list.map(todo => ({ ...todo, badges: JSON.parse(todo.badges) }))
      commit('setTodos', todos)
    },

    async addNewTodo ({ commit }, group) {
      const todo = {
        title: '',
        person: Math.floor(Math.random() * 70 + 1),
        badges: [],
        group: group
      }

      const response = await axios.post('/todos/', todo)
      if (response.status === 200) {
        commit('newTodo', { ...todo, id: response.data })
      } else {
        console.log(response.status)
      }

      // const response = await axios.post('/todos', {
      //   title: 'A New Todo',
      //   badges: [1],
      //   person: Math.floor(Math.random() * 70 + 1),
      //   group: 'dynamic'
      // })

      // console.log('response', response)

      //
      // Dili siya maka add 1 todo sa localStorage. By Object siya.
      // Dili man ta maka mutate diri in practice, for now ako lang
      // i get ang Todos from localStorage then i push sila balik.

      // let parsedTodo = JSON.parse(localStorage.getItem('todos'))
      // if (parsedTodo == null) { parsedTodo = [] }
      // // push todo at the beginning
      // parsedTodo.push(todo)
      // localStorage.setItem('todos', JSON.stringify(parsedTodo))
      // // Change parsedTodo params to todo kung ilisan na ni siya ug API
    },

    async updateTodo ({ commit }, params) {
      console.log('params', params)
      // let parsedTodo = JSON.parse(localStorage.getItem('todos'))
      // if (parsedTodo == null) { parsedTodo = [] }
      // const objIndex = parsedTodo.findIndex(todo => todo.id === params.id)

      // parsedTodo[objIndex] = params
      // localStorage.setItem('todos', JSON.stringify(parsedTodo))

      const response = await axios.patch('/todos/', params)
      console.log('update badge', response)
      if (response.status === 204) {
        commit('updateTodo', params)
      }
    },

    async deleteTodo ({ dispatch }, data) {
      const response = await axios.delete('/todos/', { data })

      if (response.status === 200) {
        dispatch('fetchTodos')
      }
    }
  }
}
