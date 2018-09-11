import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Search from '@/components/Search'
import Posts from '@/components/Posts'
import NewPost from '@/components/NewPost'
import NewsList from '@/components/NewsList'
import ViewPost from '@/components/ViewPost'
import Login from '@/components/Login'
import Mypage from '@/components/Mypage'
import SignUp from '@/components/SignUp'
import MyScraps from '@/components/MyScraps'
import HeadLine from '@/components/HeadLine'
import CategoryList from '@/components/CategoryList'
import Category from '@/components/Category'
import Interest from '@/components/Interest'

Vue.use(Router)
const requireAuth = () => (from, to, next) => {
  const isAuthenticated = false
  if (!isAuthenticated) return next()
  next('/login')
}

const returnId = () =>{
  return localStorage.accessToken
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/search/:query',
      name: 'Search',
      component: Search
    },
    {
      path: '/headline',
      name: 'HeadLine',
      component: HeadLine
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/news',
      name: 'NewsList',
      component: NewsList
    },
    {
      path: '/posts/view',
      name: 'ViewPost',
      component: ViewPost
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/mypage',
      name: 'Mypage',
      component: Mypage,
      beforeEnter: requireAuth()
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/myscrap',
      name: 'MyScrap',
      component: MyScraps
    },
    {
      path: '/categorylist',
      name: 'CategoryList',
      component: CategoryList
    },
    {
      path: '/category/:category',
      name: 'Category',
      component: Category
    },
    {
      path: '/interest',
      name: 'Interest',
      component: Interest
    }
  ]
})
