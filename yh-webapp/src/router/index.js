import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Classify from '../pages/classify'
import My from '../pages/my'
import Shopcar from '../pages/shopcar'
import Stroll from '../pages/stroll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/shopcar',
      name: 'Shopcar',
      component: Shopcar
    },
    {
      path: '/stroll',
      name: 'Stroll',
      component: Stroll
    },
    {
      path: '/*',
      redirect:"/home"
    }
  ]
})
