<template>
  <div class="home">
    <h1 class="text-center my-3">Todo List Vuex</h1>
    <todo-list :todos="todos" v-if="todos"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
const TodoList = () => import('@/components/todo-list-vuex.vue')

export default {
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
