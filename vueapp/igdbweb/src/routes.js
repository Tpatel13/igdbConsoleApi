import Vue from 'vue'
import VueRouter from  'vue-router'
import History from './components/History.vue'
import GameList from './components/GameList.vue'
import Test from './components/Test.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/history",
    name: "history",
    component: History
  },
  {
    path: '/GameList',
    name: 'gameList',
    component: GameList
  },
  {
      path:"/test",
      name:'test',
      component:Test
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router