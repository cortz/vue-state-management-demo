<template>
  <li>
    <input type="checkbox" :id="todo.id" v-model="todo.isDone" @change="updateTodo(todo)">
    <label :for="todo.id" :class="todo.isDone ? 'done' : ''">{{todo.name}}</label>
  </li>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations({
      updateTodo: 'UPDATE_TODO'
    })
  }
}
</script>

<style scoped>
li {
  text-align: left;
  list-style: none;
}

li label.done {
  text-decoration: line-through;
}
</style>
