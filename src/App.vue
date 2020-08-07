<template>
  <div id="app">
    <nav class="flex flex-row bg-teal-300 text-white font-bold text-2xl justify-center h-16 p-8">
      <span class="self-center mr-auto text-black">Trello clone</span>
      <router-link to='/' class="self-center"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="44" height="44" viewBox="0 0 24 24" stroke-width="2.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z"/>
  <polyline points="5 12 3 12 12 3 21 12 19 12" />
  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
</svg></router-link>
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
