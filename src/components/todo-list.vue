<template>
  <div class="todo-list">
    <ol>
      <todo-item v-for="todo in todos" :key="todo.id" :todo="todo"/>
    </ol>
  </div>
</template>

<script>
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
  }
}
</script>

<style scoped>
.todo-list {
  width: 400px;
  margin: 0 auto;
}
</style>
