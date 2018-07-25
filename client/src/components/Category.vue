<template>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'category',
    data () {
      return {
        category: '',
        params: ''
      }
    },
    mounted () {
      this.fetchCategory()
    },
    methods:{
      fetchCategory : function () {
        const {category} = this.$route.params        
        axios
          .get(`https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=602cd3b6051a451d8e99935b8e7cad01`)
          .then(
            response => {
              this.headLine = response.data.articles
              console.log(this.headLine)
            },
            error => {
              alert(error)
            }
          )
        
      }
    }
  }
</script>
 