<template>
  <div class="container bg-gray-300 w-full mx-auto rounded rounded-t-lg shadow-md">
    <div class="bg-gray-400 flex flex-row p-3 rounded-t-lg justify-center">
      <div class="bg-gray-400 text-4xl font-bold">{{ item.title }}</div>
    </div>
    <div>
      <input
        type="text"
        class="border-blue-600 mr-4 mt-4 p-2 border-2 rounded"
        v-model="itemBodyInput"
      />
      <button
        @click="createItemBody()"
        class="bg-blue-600 text-white font-bold p-2 mt-4fsdsdsdffsd rounded"
      >Add/Edit body</button>
    </div>
    <div class="text-2xl py-12 px-6">{{ item.body }}</div>
    <div class="flex flex-row justify-center pb-4">
      <button @click="deleteItem()" class="bg-red-400 font-bold px-4 py-3 rounded mx-2">Delete</button>
      <button
        @click="moveTo = !moveTo"
        class="bg-yellow-400 font-bold px-4 py-3 rounded mx-2"
      >Move to</button>
    </div>
    <div v-if="moveTo" class="mb-4">
      <div v-for="list in lists" :key="list.id">
        <button
          @click="moveItem(list.id)"
          class="bg-yellow-400 font-bold px-10 py-3 rounded m-1"
        >{{ list.id + ' : ' + list.name }}</button>
      </div>
    </div>
    <hr class="bg-gray-400 h-1 mx-8" />
    <div class="mt-2 pb-2">
      <p class="text-3xl font-bold">comments</p>
      <div v-if="item.comments == undefined" class="text-lg mt-2 pb-2">
        <p>There are no comments on this item</p>
        <div>
          <input
            type="text"
            class="border-blue-600 mr-4 mb-4 p-2 border-2 rounded"
            v-model="commentInput"
          />
          <button
            @click="createComment()"
            class="bg-blue-600 text-white font-bold p-2 mt-2 rounded"
          >Add a comment</button>
        </div>
      </div>
      <div v-else>
        <div>
          <input
            type="text"
            class="border-blue-600 mr-4 mb-4 p-2 border-2 rounded"
            v-model="commentInput"
          />
          <button
            @click="createComment()"
            class="bg-blue-600 text-white font-bold p-2 mt-2 rounded"
          >Add a comment</button>
        </div>
        {{ item }}
        <div
          v-for="comment in item.comments"
          :key="comment.id"
          class="bg-orange-300 flex flex-row shadow-md rounded border mt-2 p-2 mx-auto w-11/12 items-center"
        >
          <p class="text-lg ml-2">{{ comment.comments }}</p>
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
      listId: parseInt(this.$route.params.listId),
      itemId: parseInt(this.$route.params.itemId),
      moveTo: false,
      commentInput: "",
      itemBodyInput: "",
    };
  },
  computed: {
    ...mapGetters(["getItemById", "getListsById"]),
    lists() {
      return this.getListsById(this.boardId);
    },
    item() {
      return this.getItemById(this.boardId, this.listId, this.itemId);
    },
  },
  methods: {
    deleteItem() {
      this.$store.commit("deleteItem", [this.item, this.listId, this.boardId]);

      this.$router.go(-1);
    },
    moveItem(listId) {
      this.$store.commit("moveItem", [this.item, listId, this.boardId]);

      // this.deleteItem();
    },
    createItemBody() {
      this.$store.commit("createBody", [
        this.itemBodyInput,
        this.itemId,
        this.boardId,
        this.listId,
      ]);

      this.itemBodyInput = "";
    },
    createComment() {
      this.$store.commit("createComment", [
        this.commentInput,
        this.itemId,
        this.boardId,
        this.listId,
      ]);

      this.commentInput = "";
    },
  },
  mounted() {},
};
</script>

<style>
</style>