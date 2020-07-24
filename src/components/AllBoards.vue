<template>
  <div class="container mx-auto">
    <div class="max-w-2xl flex flex-row mx-auto">
      <p class="text-2xl font-bold mr-auto self-center">Boards:</p>

      <button v-if="hideInput" @click="hideInput = !hideInput" class="bg-black create-new-board"></button>
      <div v-else>
        <input type="text" class="border-black mr-4 p-2 border-2 rounded" v-model="inputData" required />
        <button
          @click="createBoard()"
          class="bg-black text-white font-bold p-2 rounded"
        >Create Board</button>
      </div>
    </div>
    <div class="max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-16 mx-auto mt-8">
      <!-- <router-link :to="`/${board.name}`" class="flex bg-black h-40 shadow-md rounded" v-for="(board, index) in boards" :key="index">
        <p class="text-white text-4xl text-center mx-auto self-center">{{ board.name }}</p>
      </router-link>-->
      <button
        @click="openBoard(board)"
        class="flex flex bg-blue-700 hover:bg-blue-600 h-40 shadow-md rounded"
        v-for="(board, index) in boards"
        :key="index"
      >
        <p class="text-white text-4xl text-center mx-auto self-center">{{ board.name }}</p>
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
      inputData: "",
    };
  },
  computed: {
    ...mapGetters(["boards"]),
  },
  methods: {
    createBoard() {
      this.hideInput = !this.hideInput;
      if(this.inputData == '') {
        this.hideInput = !this.hideInput;
        return
      }
      this.$store.commit("createBoard", this.inputData);
      this.inputData = "";

    },
    openBoard(board) {
      this.$router.push({
        name: "board",
        params: {
          boardId: board.id,
          lists: board.lists,
        },
      });
    },
  },
  mounted() {
  },
};
</script>

<style>
.create-new-board {
  height: 3rem;
  width: 3rem;
  border-radius: 100%;
}

.create-new-board:after,
.create-new-board:before {
  content: "";
  display: block;
  position: relative;
  color: white;
  background-color: white;
}

.create-new-board:before {
  top: 14px;
  left: 9px;
  width: 2rem;
  height: 0.5rem;
}

.create-new-board:after {
  top: -5px;
  left: 20px;
  width: 0.5rem;
  height: 2rem;
}
</style>