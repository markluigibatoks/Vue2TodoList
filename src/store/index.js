import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: 'Contact client for outline',
        person: 1,
        badges: [],
        updates: '',
        order: 3,
        group: 'Regular'
      },
      {
        id: 2,
        title: 'Contact client for outline',
        person: 2,
        badges: [],
        updates: '',
        order: 1,
        group: 'Regular',
      },
      {
        id: 3,
        title: 'Contact client for outline',
        person: 3,
        badges: [],
        updates: '',
        order: 2,
        group: 'Regular',
      },
      {
        id: 4,
        title: 'Hold introductory meeting',
        person: 4,
        badges: ['Medium', 'At Risk'],
        updates: '',
        order: 1,
        group: 'Doing',
      },
      {
        id: 5,
        title: 'Determine project goal',
        person: 5,
        badges: ['Low', 'On Track'],
        updates: '',
        order: 3,
        group: 'Doing'
      },
      {
        id: 6,
        title: 'Set final deadline',
        person: 6,
        badges: ['High', 'Off Track'],
        updates: '',
        order: 2,
        group: 'Doing',
      },
      {
        id: 7,
        title: 'Determine project goal',
        person: 7,
        badges: ['Low', 'On Track'],
        updates: '',
        order: 1,
        group: 'Done',
      },
      {
        id: 8,
        title: 'Hold introductory meeting',
        person: 8,
        badges: ['Medium', 'At Risk'],
        updates: '',
        order: 2,
        group: 'Done',
      },
    ],
  },
  getters: {
    // todoGroups.done
    // todoGroups.ongoing
    
    todosByGroup: (state) => {
      const group = {}

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
  },
  actions: {
  },
  modules: {
  }
})
