import Api from '@/services/Api'

export default {
  addUser (params) {
    return Api().post('/user/signup', params)
  },
  chekLogin (params) {
    return Api().post('/user/login', params)
  }
}
