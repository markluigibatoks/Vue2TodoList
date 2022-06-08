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

    const todo = {
      id: Date.now(),
      title: '',
      badges: [],
      person: Math.floor(Math.random() * 70 + 1),
      group: group,
      order: 1,
    }


    // Dili siya maka add 1 todo sa localStorage. By Object siya.
    //Dili man ta maka mutate diri in practice, for now ako lang
    //i get ang Todos from localStorage then i push sila balik.

    let parsedTodo = JSON.parse(localStorage.getItem('todos'))
    if(parsedTodo == null) {parsedTodo = []}
    //push todo at the beginning
    parsedTodo.push(todo) 
    localStorage.setItem('todos', JSON.stringify(parsedTodo));

    //Change parsedTodo params to todo kung ilisan na ni siya ug API
    commit('newTodo', parsedTodo)
  },

  updateTodo({commit}, params) {
    let parsedTodo = JSON.parse(localStorage.getItem('todos'))
    if(parsedTodo == null) {parsedTodo = []}
    
    let objIndex = parsedTodo.findIndex(todo => todo.id == params.id)

    parsedTodo[objIndex] = params
    localStorage.setItem('todos', JSON.stringify(parsedTodo));

    commit('newTodo', parsedTodo)
  },

  deleteTodo({commit}, params){
    let parsedTodo = JSON.parse(localStorage.getItem('todos'))
    if(parsedTodo == null) {parsedTodo = []}

    parsedTodo = parsedTodo.filter(todo => todo.id != params.id)
    localStorage.setItem('todos', JSON.stringify(parsedTodo));
    
    commit('newTodo', parsedTodo)
  }
}

const mutations = {
  setTodos: (state, todos) => state.todos = todos,

  newTodo: (state, todo) => {
    
    //Ilisan ni siya ug katong state.todos.push(todo)
    state.todos = todo

  }
}

export default {
    state,
    getters,
    actions,
    mutations
}