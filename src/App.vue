<template>
  <div id="app">
    <nav class="bg-red-800 h-16"></nav>
    <div class="mt-10">
      <!-- <AllBoards></AllBoards> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import AllBoards from './components/AllBoards.vue'

export default {
  name: 'App',
  components: {
    // AllBoards
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
