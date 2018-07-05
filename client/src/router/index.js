import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search'
import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/Posts'
import NewPost from '@/components/NewPost'
import NewsList from '@/components/NewsList'
import EditPost from '@/components/EditPost'
import Login from '@/components/Login'
import Mypage from '@/components/Mypage'
import SignUp from '@/components/SignUp'
import MyScraps from '@/components/MyScraps'

Vue.use(Router)

const requireAuth = () => (from, to, next) => {
  const isAuthenticated = false
  if (isAuthenticated) return next()
  next('/login?returnPath=mypage')
}

const returnId = () =>{
  return localStorage.accessToken
}


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/news/search/:query',
      name: 'Search',
      component: Search
    },
    {
      path: '/hellow',
      name: 'HelloWorld',
      component: HelloWorld
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
      path: '/posts/:id',
      name: 'EditPost',
      component: EditPost
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
      component: MyScraps,
    }
  ]
})
