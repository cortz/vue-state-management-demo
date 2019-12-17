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
      api.put(`/todos/${todo.id}`, todo)
    }
  },
  actions: {
    async fetchTodos ({ commit, state }) {
      if (!state.todos) {
        const { data } = await api.get('/todos')
        commit('SET_TODOS', data)
        return data
      }
    }
  }
})
