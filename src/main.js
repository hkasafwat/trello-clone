import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import "@/assets/css/tailwind.css";
import routes from './routes.js'

import VuexPersist from 'vuex-persist'

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);

const vuexPersist = new VuexPersist({
  key: 'trello-clone',
  storage: window.localStorage
})

const store = new Vuex.Store({
  state: {
    boards: [
      {
        id: 0,
        name: "test",
        lists: [
          {
            id: 0,
            name: "todo",
            items: [
              {
                id: 0,
                title: "first item",
                body: "this is an item in the list",
                date: "",
              },
            ],
          },
        ],
      },
      {
        id: 1,
        name: "test2",
      },
    ],
  },
  getters: {
    boards: (state) => {
      return state.boards;
    },
  },
  mutations: {
    createBoard(state, data) {
      let id = state.boards[state.boards.length - 1].id;

      state.boards.push({
        id: id,
        name: data,
      });

      console.log(state)
    },
  },
  plugins: [vuexPersist.plugin]
});

new Vue({
  render: (h) => h(App),
  store,
  router: new VueRouter(routes) 
}).$mount("#app");
