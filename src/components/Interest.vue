<template>
  <div class="intrest_cont">
    <div v-for="(item, index) in articles" :key="index">
      <strong>{{interest[index]}}</strong>
      <ul class="">
        <li v-for="aa in item">
          {{aa.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data(){
      return{
        userId : localStorage.accessToken,
        interest: [],
        articles: [],
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
            this.articles.push(data)
            console.log(this.articles)
            // this.articles[item] = new Object(data) 
          },
          error => {alert(error)})
        })
      }
    }
  }
</script>

<style lang="scss">

</style>