<template>
  <div id="app">
    <navigation-bar />
    <main class="container">
      <router-view/>
    </main>
  </div>
</template>

<style lang="scss" src="@/assets/site.scss"></style>

<script>
import NavigationBar from '@/components/navigation-bar.vue'
export default {
  components: {
    NavigationBar
  }
}
</script>
