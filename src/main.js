import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import "@/assets/css/tailwind.css";
import routes from "./routes.js";

import VuexPersist from "vuex-persist";

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);

const vuexPersist = new VuexPersist({
  key: "trello-clone",
  storage: window.localStorage,
});

const store = new Vuex.Store({
  state: {
    boards: [],
  },
  getters: {
    boards: (state) => {
      return state.boards;
    },
    getBoardById: (state) => (boardId) => {
      return state.boards.find((board) => board.id == boardId);
    },
    getListsById: (state) => (boardId) => {
      return state.boards[boardId].lists;
    },
    getItemById: (state) => (boardId, listId, itemId) => {
      return state.boards[boardId].lists[listId].items.find(
        (item) => item.id == itemId
      );
    },
  },
  mutations: {
    createBoard(state, createBoardInput) {
      if (state.boards.length < 1) {
        state.boards.push({
          id: 0,
          name: createBoardInput,
          lists: [],
        });
      } else {
        let boardId = state.boards[state.boards.length - 1];

        state.boards.push({
          id: boardId.id + 1,
          name: createBoardInput,
          lists: [],
        });
      }
    },
    createList(state, data) {
      let newList = data[0];
      let boardId = data[1];

      if (state.boards[boardId].lists.length < 1) {
        state.boards[boardId].lists.push({
          id: 0,
          name: newList,
          items: [],
        });
      } else {
        let lastListId =
          state.boards[boardId].lists[state.boards[boardId].lists.length - 1];

        state.boards[boardId].lists.push({
          id: lastListId.id + 1,
          name: newList,
          items: [],
        });
      }
    },
    createItem(state, data) {
      let newItem = data[0];
      let boardId = data[1];
      let listId = data[2];

      if (state.boards[boardId].lists[listId].items.length < 1) {
        state.boards[boardId].lists[listId].items.push({
          id: 0,
          title: newItem,
          body: "",
          comments: [],
        });
      } else {
        let lastItemId =
          state.boards[boardId].lists[listId].items[
            state.boards[boardId].lists[listId].items.length - 1
          ];

        state.boards[boardId].lists[listId].items.push({
          id: lastItemId.id + 1,
          title: newItem,
          body: "",
          comments: [],
        });
      }
    },
    createBody(state, data) {
      let newBody = data[0];
      let itemId = data[1];
      let boardId = data[2];
      let listId = data[3];
      // console.log(data)
      console.log(state.boards[boardId].lists[listId].items)
      // state.boards[boardId].lists[listId].items[itemId].body = newBody;
      state.boards[boardId].lists[listId].items.forEach((item) => {
        if (item.id == itemId) {
          item.body = newBody
        }
      })

    },
    createComment(state, data) {
      let newComment = data[0];
      let itemId = data[1];
      let boardId = data[2];
      let listId = data[3];

      if (
        state.boards[boardId].lists[listId].items[itemId].comments.length < 1
      ) {
        state.boards[boardId].lists[listId].items[itemId].comments.push({
          id: 0,
          comments: newComment,
        });
      } else {
        let lastCommentId =
          state.boards[boardId].lists[listId].items[itemId].comments[
            state.boards[boardId].lists[listId].items[itemId].comments.length -
              1
          ];
          console.log(lastCommentId)

        state.boards[boardId].lists[listId].items[itemId].comments.push({
          id: lastCommentId.id + 1,
          comments: newComment,
        });
      }
    },
    deleteItem(state, data) {
      let itemToDelete = data[0];
      let listId = data[1];
      let boardId = data[2];

      state.boards[boardId].lists[listId].items = state.boards[boardId].lists[
        listId
      ].items.filter((item) => item.id != itemToDelete.id);
    },
    moveItem(state, data) {
      let item = data[0];
      let listId = data[1];
      let boardId = data[2];

      if (state.boards[boardId].lists[listId].items.length < 1) {
        state.boards[boardId].lists[listId].items.push({
          id: 0,
          title: item.title,
          body: item.body,
          date: item.date,
        });
      } else {
        let lastItemId =
          state.boards[boardId].lists[listId].items[
            state.boards[boardId].lists[listId].items.length - 1
          ];

        state.boards[boardId].lists[listId].items.push({
          id: lastItemId.id + 1,
          title: item.title,
          body: item.body,
          date: item.date,
        });
      }
    },
  },
  plugins: [vuexPersist.plugin],
});

new Vue({
  render: (h) => h(App),
  store,
  router: new VueRouter(routes),
}).$mount("#app");
