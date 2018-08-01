<template>
<div style="color:#fff;">
  <ul>
    <li v-for="item in articles[interest[0]]" :key="item.key">
    </li>
  </ul>

        {{articles}}
</div>
</template>

<script>
import axios from 'axios'
  export default {
    data(){
      return{
        userId : localStorage.accessToken,
        interest: '',
        articles: {}
      }
    },
    created (){
      if(this.userId){
        axios.get('http://localhost:9000/interest').then((response) => {
          this.interest = response.data.data
        }).then(()=>{
          this.getInterest()
          // console.log(this.articles)
        },(error) => {
          console.log(error)
        })
      }
    },
    methods: {
      getInterest(){
        this.interest.forEach((item, index) => {      
        axios
          .get(`https://newsapi.org/v2/top-headlines?country=kr&${item}=${this.category}&apiKey=602cd3b6051a451d8e99935b8e7cad01`)
          .then(response => {

            const data = response.data.articles
            this.articles[item] = new Object(data) 
                        console.log(this.articles)           
          },
          error => {alert(error)})
        })
      }
    }
  }
</script>

<style lang="scss">

</style>