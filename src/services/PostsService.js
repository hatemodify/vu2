import Api from '@/services/Api'

export default {
  fetchPosts () {
    return Api().get('posts')
  },
  ViewPost (){
    return Api().get('posts/:title')
  },
  addPost (params) {
    return Api().post('posts', params)
  },
  newsList () {
    return Api().get('news')
  },
  searchList (params) {
    return Api().get('/search/' + params.query, params)
  },
  addScrap (params) {
    return Api().put('scrap', params)
  },
  myScraps () {
    const userId = localStorage.accessToken
    console.log(userId)
    return Api().get('myscrap', userId)
  }
}
