import AllBoards from '@/components/AllBoards.vue';
import BoardLists from '@/components/BoardLists.vue';
import ListItem from '@/components/ListItem.vue';

export default {
  mode: 'history',

  routes: [
      {
          path: '/',
          component: AllBoards
      },

      {
          path: '/:boardId',
          component: BoardLists,
      },

      {
          path: '/:boardId/:listId/:itemId',
          component: ListItem
      }
  ]
}