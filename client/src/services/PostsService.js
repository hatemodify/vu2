import Api from '@/services/Api'

export default {
  fetchPosts () {
    return Api().get('posts')
  },
  addPost (params) {
    return Api().post('posts', params)
  },
  newsList () {
    return Api().get('news')
  },
/*   getQuery (params) {
    return Api().get('news/search/' + params.query, params)    
  }, */
  searchList (params) {
    return Api().get('news/search/' + params.query, params) 
  }
}