import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const STORAGE_KEY = 'todoKey';

export default new Vuex.Store({
  state: {
    todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('addTodo', {
        todo,
        done: false
      })
    }
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo)
    },

  },
  plugins: [
    store => {
      store.subscribe((mutation, { todos }) => {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
      })
    }
  ]
})
