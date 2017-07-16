import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Learn from '@/components/learning/Learn'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home, alias: ['/home'] },
    { path: '/learn', name: 'Learn', component: Learn },
    { path: "*", component: PageNotFound }
  ]
})
