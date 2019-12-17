<template>
  <div id="nav" class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <a class="navbar-brand" href="/">Vue DEMO</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'todo' }" class="nav-link">Todo</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'todo-vuex' }" class="nav-link">Todo Vuex</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'reactivity' }" class="nav-link">Reactivity</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
