<template>
  <div class="container bg-gray-300 w-full mx-auto rounded rounded-t-lg shadow-md">
    <div class="bg-gray-400 flex flex-row p-3 rounded-t-lg justify-center">
      <div class="bg-gray-400 text-4xl font-bold ">{{ item.title }}</div>
    </div>
    <div class="text-2xl py-10 px-6">{{ item.body }}</div>
    <div class="flex flex-row justify-center pb-4">
      <button @click="deleteItem()" class="bg-red-400 font-bold px-4 py-3 rounded mx-2">Delete</button>
      <button @click="moveTo = !moveTo" class="bg-yellow-400 font-bold px-4 py-3 rounded mx-2">Move to</button>
    </div>
    <div v-if="moveTo" class="mb-4">
      <div v-for="(list, index) in lists" :key="index">
        <button @click="moveItem(list.id)" class="bg-yellow-400 font-bold px-10 py-3 rounded m-1">{{ index + ' : ' + list.name }}</button>
      </div>
    </div>
    <hr class="bg-gray-400 h-1 mx-8">
    <div class="mt-2 pb-2">
      <p class="text-3xl font-bold">comments</p>
      <div v-if="true" class="text-lg mt-2 pb-2">
        <p>There are no comments on this item</p>
        <div>
      <input type="text" class="border-blue-600 mr-4 mb-4 p-2 border-2 rounded" v-model="inputData" />
      <button
        @click="createList()"
        class="bg-blue-600 text-white font-bold p-2 rounded"
      >Add a comment</button>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'item', 'listId', 'lists', 'boardId' ],
  data() {
    return {
      moveTo: false,
    };
  },
  methods: {
    deleteItem() {
      this.$store.commit("deleteItem", [
        this.item,
        this.listId,
        this.boardId
      ]);

      
    },
    moveItem(listId) {
       this.$store.commit("moveItem", [
        this.item,
        listId,
        this.boardId
      ]);

      this.deleteItem()
    }
  },
  mounted() {
    if( !this.item ) {
      this.$router.push({ path: '/'})
    }
  }
}
</script>

<style>

</style>