<template>
  <div id="app">
    <nav class="flex flex-row bg-red-800 text-white font-bold text-2xl justify-center h-16 p-8">
      <span class="self-center mr-auto">Trello clone</span>
      <router-link to='/' class="self-center">Home</router-link>
    </nav>
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
