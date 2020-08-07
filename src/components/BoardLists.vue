<template>
  <div>
    {{ board }}
    <div>
      <input type="text" class="border-blue-600 mr-4 mb-4 p-2 border-2 rounded" v-model="newListInput" />
      <button
        @click="createList()"
        class="bg-blue-600 text-white font-bold p-2 rounded"
      >Create New List</button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-20">
      <div v-for="list in board.lists" :key="list.id">
        <div class="shadow-md rounded rounded-t-lg border mx-6 mb-4 pb-2">
          <div class="bg-green-300 rounded-t-lg flex flex-row justify-around py-3 px-6">
            <div class="text-2xl font-bold mr-auto">{{ list.name }}</div>
            <button
              @click="showCreateItemInput(list.id)"
              class="bg-red-600 p-2 rounded text-white font-bold"
            >Add Item</button>
          </div>
          <div
            v-for="item in list.items"
            :key="item.id"
            class="bg-orange-300 flex flex-row shadow-md rounded border mt-2 p-2 mx-auto w-11/12 items-center"
          >
            <p class="text-lg ml-2 mr-auto">{{ item.title }}</p>
            <button
              @click="openListItem([list, item])"
              class="bg-orange-400 shadow-md rounded border p-2 w-2/12 items-center font-bold"
            >...</button>
          </div>
          <div
            class="flex flex-row mx-auto w-11/12 mt-2"
            v-if="createNewItem && chosenList == list.id"
          >
            <input
              type="text"
              class="shadow-md rounded border mt-2mx-auto w-11/12 p-2 w-full items-center mr-2"
              v-model="newItemInput"
            />
            <button @click="createItem()" class>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-circle-plus"
                width="55"
                height="55"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="#3182ce"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      boardId: parseInt(this.$route.params.boardId),
      newListInput: "",
      createNewItem: false,
      newItemInput: "",
      chosenList: "",
    };
  },
  computed: {
    ...mapGetters(["getBoardById"]),
    board() {
      return this.getBoardById(this.boardId);
    },
  },
  methods: {
    createList() {
      if (this.newListInput == "") {
        alert("insert list name");
        return;
      }

      this.$store.commit("createList", [this.newListInput, this.board.id]);
      this.newListInput = "";
    },
    createItem() {
      if (this.newItemInput == "") {
        this.createNewItem = !this.createNewItem;
        alert("insert item");
        return;
      }

      this.$store.commit("createItem", [
        this.newItemInput,
        this.boardId,
        this.chosenList,
      ]);
      this.newItemInput = "";
    },
    showCreateItemInput(listIndex) {
      this.createNewItem = !this.createNewItem;
      this.chosenList = listIndex;
    },
    openListItem(data) {
      console.log(data)
      this.$router.push({
        // name: "item",
        // params: {
        //   item: data[0],
        //   listId: data[1].id,
        //   lists: this.lists,
        //   boardId: this.boardId,
        // },
        path: `/${this.boardId}/${data[0].id}/${data[1].id}`
      });
    },
  },
  mounted() {
    // if( !this.boardId && !this.lists || !this.lists == undefined ) {
    //   this.$router.push({ path: '/'})
    // }
    // console.log(this.$route.params.board)
    // console.log(this.$route)
  },
};
</script>

<style>
</style>