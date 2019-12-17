<template>
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      :id="todo.id"
      v-model="todo.isDone"
      @change="updateTodo(todo)">

    <label
      :class="{ 'form-check-label': true, 'done': todo.isDone }"
      :for="todo.id">
      {{todo.name}}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      required: true,
      type: Object
    }
  },
  methods: {
    updateTodo (todo) {
      this.$emit('onUpdateTodo', todo)
    }
  }
}
</script>

<style scoped>
label.done {
  text-decoration: line-through;
}
</style>
