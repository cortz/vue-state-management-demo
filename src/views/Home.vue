<template>
  <div class="home">
    <h1>Todo List</h1>
    <todo-list :todos="todos" v-if="todos"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
const TodoList = () => import('@/components/todo-list.vue')

export default {
  name: 'home',
  components: {
    TodoList
  },
  computed: {
    ...mapState({
      todos: state => state.todos
    })
  },
  created () {
    this.fetchTodos()
  },
  methods: {
    ...mapActions(['fetchTodos'])
  }
}
</script>
