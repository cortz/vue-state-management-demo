<template>
  <div v-if="data && !loading">
    {{data}}
  </div>
</template>

<script>
import api from '../../api'

export default {
  props: {
    todoId: {
      required: true,
      type: Number
    }
  },
  data () {
    return {
      loading: true,
      data: null
    }
  },
  methods: {
    async fetchData () {
      this.data = await api.get('/todos')
      this.loading = false
    }
  }

}
</script>

<style>

</style>
