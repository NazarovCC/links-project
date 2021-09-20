import { createRouter, createWebHistory } from 'vue-router'
import Links from '../views/Links'
import About from '../views/About'
import FavoriceLinks from '../views/FavoriceLinks'

const routes = [
  {path:'/', component: Links},
  {path:'/about', component: About},
  {path:'/favorice', component: FavoriceLinks},


]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // linkActiveClass :'active',
  // linkExactActiveClass: 'active'
})

export default router
