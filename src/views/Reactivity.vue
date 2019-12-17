<template>
  <div>
    <h1>Checked: {{checked}}</h1>
    <br/>

    <h1>{{name}} and i'm {{checked}}</h1>
    <input type="text" v-model="name" />

    <input type="checkbox" v-model="checked" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: false,
      name: ''
    }
  }
}
</script>

<style>

</style>
