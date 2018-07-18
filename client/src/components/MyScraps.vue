<template>

</template>


<script>
import PostsService from '@/services/PostsService'
import axios from 'axios'
export default {
  name: 'MyScraps',
  data (){
    return {
      userId: localStorage.accessToken,
      scrapList: '',
    }
  },
  mounted () {
    this.getScrap()
    // console.log(axios.defaults.headers)
  },
  methods: {    
    async getScrap () {
      axios.get('http://localhost:9000/myscrap').then((response) => {
        this.scraps = response.data
        console.log(response)
      }, (error) => {
        console.log(error)
      })
    },
  }
}

</script>
<style lang="scss">
@import "../assets/css/news.scss";
</style>
