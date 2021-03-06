// const store = new Vuex.Store({
//   state: {
//     boards: [
//     ],
//   },
//   getters: {
//     boards: (state) => {
//       return state.boards;
//     },
//     getBoardById: () => (data) => {
//       return data
//     }
//   },
//   mutations: {
//     createBoard(state, data) {
//       if (state.boards.length < 1) {
//         state.boards.push({
//           id: 0,
//           name: data,
//           lists: [],
//         });
//       } else {
//         let boardId = state.boards[state.boards.length - 1]
//         state.boards.push({
//           id: boardId + 1,
//           name: data,
//           lists: [],
//         });
//       }
//     },
//     createList(state, data) {
//       let newList = data[0];
//       let boardId = data[1];

//       if (state.boards[boardId].lists.length < 1) {
//         state.boards[boardId].lists.push({
//           id: 0,
//           name: newList,
//           items: [],
//         });
//       } else {
//         let lastListId =
//           state.boards[boardId].lists[state.boards[boardId].lists.length - 1];
//         console.log(lastListId);
//         state.boards[boardId].lists.push({
//           id: lastListId.id + 1,
//           name: newList,
//           items: [],
//         });
//       }
//     },
//     createItem(state, data) {
//       let newItem = data[0];
//       let boardId = data[1];
//       let listId = data[2];


//       if (state.boards[boardId].lists[listId].items.length < 1) {
//         state.boards[boardId].lists[listId].items.push({
//           id: 0,
//           title: newItem,
//           body: "",
//           comments: []
//         });
//       } else {
//         let lastItemId =
//           state.boards[boardId].lists[listId].items[
//             state.boards[boardId].lists[listId].items.length - 1
//           ];

//         state.boards[boardId].lists[listId].items.push({
//           id: lastItemId.id + 1,
//           title: newItem,
//           body: "",
//           comments: []
//         });
//       }
//     },
//     createBody(state, data) {
//       let newBody = data[0];
//       let itemId = data[1]
//       let boardId = data[2];
//       let listId = data[3];

//       // if (state.boards[boardId].lists[listId].items[itemId].comments.length < 1) {
//         state.boards[boardId].lists[listId].items[itemId].body = newBody;
//       // }
//       console.log(state)
//     },
//     createComment(state, data) {
//       let newComment = data[0];
//       let itemId = data[1]
//       let boardId = data[2];
//       let listId = data[3];

//       if (state.boards[boardId].lists[listId].items[itemId].comments.length < 1) {
//         state.boards[boardId].lists[listId].items[itemId].comments.push({
//           id: 0,
//           comments: newComment
//         });
//       } else {
//         let lastCommentId =
//           state.boards[boardId].lists[listId].items[
//             state.boards[boardId].lists[listId].items[itemId].comments.length - 1
//           ];

//         state.boards[boardId].lists[listId].items[itemId].comments.push({
//           id: lastCommentId.id + 1,
//           comments: newComment
//         });
//       }
//     },
//     deleteItem(state, data) {
//       let itemToDelete = data[0];
//       let listId = data[1];
//       let boardId = data[2];
//       // let lastItemId = state.boards[boardId].lists[listId].items[state.boards[boardId].lists[listId].items.length - 1].id || -1 ;

//       state.boards[boardId].lists[listId].items = state.boards[boardId].lists[
//         listId
//       ].items.filter((item) => {
//         return item.id != itemToDelete.id;
//       });
//     },
//     moveItem(state, data) {
//       let item = data[0];
//       let listId = data[1];
//       let boardId = data[2];

//       if (state.boards[boardId].lists[listId].items.length < 1) {
//         state.boards[boardId].lists[listId].items.push({
//           id: 0,
//           title: item.title,
//           body: item.body,
//           date: item.date,
//         });
//       } else {
//         let lastItemId =
//           state.boards[boardId].lists[listId].items[
//             state.boards[boardId].lists[listId].items.length - 1
//           ];

//         state.boards[boardId].lists[listId].items.push({
//           id: lastItemId.id + 1,
//           title: item.title,
//           body: item.body,
//           date: item.date,
//         });
//       }
//     }
//   },
//   plugins: [vuexPersist.plugin],
// });