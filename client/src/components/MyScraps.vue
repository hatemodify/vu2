<template>
<div>{{userId}}</div>
</template>


<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'MyScraps',
  data (){
    return {
      userId: localStorage.accessToken,
      scrapList: '',
      msg: 'aaaaaa'
    }
  },
  mounted () {
    this.getScrap()
  },
  methods: {    
    async getScrap () {
      const response = await PostsService.myScraps({
        userId: localStorage.accessToken
      })
      this.result = response.result
    },
    
  }
}

</script>
<style lang="scss">
@import "../assets/css/news.scss";
</style>
