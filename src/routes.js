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
          path: '/lists',
          component: BoardLists,
          name: 'board',
          props: true
      },

      {
          path: '/lists/item',
          component: ListItem,
          name: 'item',
          props: true
      }
  ]
}