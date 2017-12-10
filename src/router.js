import Vue from 'vue'
import VueRouter from 'vue-router'

import Game from './components/Game'
import Intro from './components/Intro'

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    component:Intro,
  },
  {
    path: '/game',
    component:Game,
  },
]

export default new VueRouter({
  mode: 'history',
  routes,
})
