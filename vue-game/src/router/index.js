import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import game from '@/components/game/game'
import home from '@/components/home/home'
import toutiao from '@/components/headlines/headlines'
import zhoubian from '@/components/peripheral/peripheral'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/game',
      name: '主页'
    },
    {
      path: '/recommend',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/toutiao',
      name: 'toutiao',
      component: toutiao
    },
    {
      path: '/game',
      name: 'game',
      component: game
    },
    {
      path: '/shequ',
      name: 'home',
      component: home
    },
    {
      path: '/zhoubian',
      name: 'HelloWorld',
      component: zhoubian
    }
  ]
})
