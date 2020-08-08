<template>
  <div class="container mx-auto px-8">
    <div class="bg-teal-300 max-w-2xl flex flex-row mx-auto rounded px-4 py-2">
      <p class="text-2xl font-bold mr-auto self-center">Boards:</p>
      <button v-if="hideInput" @click="hideInput = !hideInput" class>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-circle-plus"
          width="55"
          height="55"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="#eee"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx="12" cy="12" r="9" />
          <line x1="9" y1="12" x2="15" y2="12" />
          <line x1="12" y1="9" x2="12" y2="15" />
        </svg>
      </button>
      <div v-else>
        <input
          type="text"
          class="border-teal-200 mr-4 p-2 border-2 rounded"
          v-model="createBoardInput"
          required
        />
        <button
          @click="createBoard()"
          class="bg-teal-200 border-teal-200 text-white font-bold p-2 rounded"
        >Create Board</button>
      </div>
    </div>
    <div class="max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-16 mx-auto mt-8">
      <button
        @click="openBoard(board)"
        class="flex flex bg-blue-400 hover:bg-blue-500 h-40 shadow-md rounded"
        v-for="board in boards"
        :key="board.id"
      >
        <p class="text-black text-4xl text-center font-bold mx-auto self-center">{{ board.name }}</p>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      hideInput: true,
      createBoardInput: "",
    };
  },
  computed: {
    ...mapGetters(["boards"]),
  },
  methods: {
    createBoard() {
      this.hideInput = !this.hideInput;
      if (this.createBoardInput == "") {
        alert('please enter a board name');
        this.hideInput = !this.hideInput;
        return;
      }
      this.$store.commit("createBoard", this.createBoardInput);
      this.createBoardInput = "";
    },
    openBoard(board) {
      this.$router.push({
        path: `/${board.id}`
      })
    },
  },
  mounted() {},
};
</script>

<style>
</style>