<template>
  <div class="row">
    <div class="col-md-6 mx-auto todo-list">
      <todo-item v-for="todo in todos" @onUpdateTodo="updateTodo" :key="todo.id" :todo="todo"/>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
const TodoItem = () => import('./todo-item.vue')

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
    ...mapMutations({
      updateTodo: 'UPDATE_TODO'
    })
  }
}
</script>
