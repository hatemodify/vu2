import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://fead.herokuapp.com`
  })
}
