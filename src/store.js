import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: null
  },
  mutations: {
    SET_TODOS (state, todos) {
      state.todos = todos
    },
    UPDATE_TODO (state, todo) {
      state.todos.find(o => o.id === todo.id).isDone = todo.isDone
      // api.put(`/todos/${todo.id}`, todo)
    }
  },
  actions: {
    fetchTodos ({ commit, state }) {
      if (!state.todos) {
        return api.get('/todos').then(response => {
          commit('SET_TODOS', response.data)
          return response.data
        })
      }
    }
  }
})
