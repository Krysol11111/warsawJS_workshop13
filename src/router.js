import Vue from 'vue'
import VueRouter from 'vue-router'

import Game from './components/Game'
import Intro from './components/Intro'
import Won from './components/Won'
import Lost from './components/Lost'

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
  {
    path: '/won',
    component:Won,
  },
  {
    path: '/lost',
    component:Lost,
  },
]

export default new VueRouter({
  mode: 'history',
  routes,
})
