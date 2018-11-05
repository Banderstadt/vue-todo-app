import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const STORAGE_KEY = 'todoKey'

export default new Vuex.Store({
  state: {
    todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  actions: {
    addTodo ({ commit }, title) {
      commit('addTodo', {
        title,
        done: false
      })
      console.log
    },
    toggleTodo ({ commit }, todo) {
      commit('toggleTodo', {
        todo,
        done: !todo.done
      })
    },
    editTodo ({ commit }, { todo, title }) {
      commit('editTodo', { todo, title })
    },
    deleteTodo ({ commit }, todo) {
      commit('deleteTodo', {
        todo
      })
    }
  },
  mutations: {
    toggleTodo (state, { todo, done }) {
      todo.done = done
    },
    editTodo (state, { todo, title }) {
      todo.title = title
    },
    deleteTodo (state, { todo }) {
      const todoIndex = state.todos.indexOf(todo)
      state.todos.splice(todoIndex, 1)
    },
    addTodo (state, todo) {
      state.todos.push(todo)
    }
  },
  plugins: [
    store => {
      store.subscribe((mutation, { todos }) => {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
      })
    }
  ]
})
