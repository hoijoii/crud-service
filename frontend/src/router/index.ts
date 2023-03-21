import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogsView from '../views/blogs/BlogsView.vue'
import FreeView from '../views/categories/FreeView.vue'
import NoticeView from '../views/categories/NoticeView.vue'
import LoginView from '../views/LoginView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: BlogsView
  },
  {
    path: '/category/free',
    name: 'free',
    component: FreeView
  },
  {
    path: '/category/notice',
    name: 'notice',
    component: NoticeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
