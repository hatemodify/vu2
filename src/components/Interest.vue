<template>
<div style="color:#fff;">
  <ul v-for="item in articles" :key="item.title">
    <li>
      {{item}}
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
        interest: [],
        articles: {},
        len:''
      }
    },
    created (){
      if(this.userId){
        axios.get('http://localhost:9000/interest').then((response) => {
          this.interest = response.data.data 
          
        }).then(()=>{
          this.getInterest(this.interest)
          this.len = this.interest.length
        },(error) => {
          console.log(error)
        })
      }
    },
    beforeMount (){

    },
    mounted(){

    },
    methods: {
      getInterest(arr){
        arr.forEach((item, index) => {      
        axios
          .get(`https://newsapi.org/v2/top-headlines?country=kr&${item}=${this.category}&apiKey=602cd3b6051a451d8e99935b8e7cad01`)
          .then(response => {
            const data = response.data.articles
            this.articles[item] = new Object(data) 
          },
          error => {alert(error)})
        })
      }
    }
  }
</script>

<style lang="scss">

</style>