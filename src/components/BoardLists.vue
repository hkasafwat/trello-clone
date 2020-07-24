<template>
  <div>
    <div>
      <input type="text" class="border-blue-600 mr-4 mb-4 p-2 border-2 rounded" v-model="inputData" />
      <button
        @click="createList()"
        class="bg-blue-600 text-white font-bold p-2 rounded"
      >Create New List</button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-20">
      <div v-for="(list, index) in lists" :key="index">
        <div class="shadow-md rounded rounded-t-lg border mx-6 mb-4 pb-2">
          <div class="bg-green-300 rounded-t-lg flex flex-row justify-around py-3 px-6">
            <div class="text-2xl font-bold mr-auto">{{ list.name }}</div>
            <button
              @click="showCreateItemInput(index)"
              class="bg-red-600 p-2 rounded text-white font-bold "
            >Add Item</button>
          </div>
          <div
            v-for="(item, index) in list.items"
            :key="index"
            class="bg-orange-300 flex flex-row shadow-md rounded border mt-2 p-2 mx-auto w-11/12 items-center"
          >
            <p class="text-lg ml-2 mr-auto">{{ item.title }}</p>
            <button @click="openListItem([item, list])" class="bg-orange-400 shadow-md rounded border p-2 w-2/12  items-center font-bold">...</button>
          </div>
          <div
            class="flex flex-row mx-auto w-11/12 mt-2"
            v-if="createNewItem && index == chosenList"
          >
            <input
              type="text"
              class="shadow-md rounded border mt-2mx-auto w-11/12 p-2 w-full items-center mr-2"
              v-model="newItemInput"
            />
            <button
              @click="createItem()"
              class="bg-blue-700 text-white text-4xl font-bold rounded-full h-10 w-12 flex items-center justify-center"
            >+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["boardId", "lists"],
  data() {
    return {
      inputData: "",
      createNewItem: false,
      newItemInput: "",
      chosenList: "",
    };
  },
  methods: {
    createList() {
      if(this.inputData == '') {
        this.hideInput = !this.hideInput;
        return
      }
      this.$store.commit("createList", [this.inputData, this.boardId]);
      this.inputData = "";
    },
    createItem() {
      this.$store.commit("createItem", [
        this.newItemInput,
        this.boardId,
        this.chosenList,
      ]);
      this.newItemInput = "";
    },
    showCreateItemInput(listIndex) {
      this.createNewItem = true;
      this.chosenList = listIndex;
    },
    openListItem(data) {
       this.$router.push({
        name: "item",
        params: {
          item: data[0],
          listId: data[1].id,
          lists: this.lists,
          boardId: this.boardId
        },
      });
    }
  },
  mounted() {
    if( !this.boardId && !this.lists || !this.lists == undefined ) {
      this.$router.push({ path: '/'})
    }
  },
};
</script>

<style>
</style>