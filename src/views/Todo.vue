<template>
  <div class="home">
    <h1 class="text-center my-3">Todo List</h1>
    <todo-list :todos="todos" v-if="todos"/>
  </div>
</template>

<script>
import api from '../../api'
const TodoList = () => import(/* webpackChunkName: "lazy-todo-list" */'@/components/todo-list.vue')
// import TodoList from '@/components/todo-list.vue'

export default {
  data () {
    return {
      todos: null
    }
  },
  components: {
    TodoList
  },
  created () {
    this.fetchTodos()
  },
  methods: {
    async fetchTodos () {
      const todos = await api.get('/todos')
      this.todos = todos.data
    }
  }
}
</script>
