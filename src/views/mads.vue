<template>
  <div class="home">
    <h1 class="text-center my-3">Todo List</h1>
    <todo-list :todos="todos"  v-if="todos && !loading"/>
  </div>
</template>

<script>
import api from '../../api'
const TodoList = () => import('@/components/todo-list.vue')

export default {
  data () {
    return {
      loading: true,
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
      const { data } = await api.get('/todos')
      this.todos = data
      this.loading = false
    }
  }
}
</script>
