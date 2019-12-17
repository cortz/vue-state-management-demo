<template>
  <div class="row">
    <div class="col-md-6 mx-auto todo-list">
      <todo-item
        v-for="todo in todos"
        @onUpdateTodo="updateTodo"
        :key="todo.id"
        :todo="todo"/>
    </div>
  </div>
</template>

<script>
import api from '../../api'
const TodoItem = () => import(/* webpackChunkName: "lazy-todo-item" */'./todo-item.vue')
// import TodoItem from './todo-item.vue'

export default {
  components: {
    TodoItem
  },
  props: {
    todos: {
      required: true,
      type: Array
    }
  },
  methods: {
    async updateTodo (todo) {
      await api.put(`/todos/${todo.id}`, todo)
    }
  }
}
</script>
