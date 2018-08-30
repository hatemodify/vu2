<template>
<div>
  <ul class="list_news">
    <li v-for="item in result" :key="item.id">
      <span class="bg_news" v-bind:style="{ backgroundImage: 'url(' + item.urlToImage + ')' }"></span>
      <div class="tit">{{item.title}}</div>
      <p class="desc_news">
        {{item.description}}
      </p>

      <!-- <img v-bind:src="news.urlToImage"> -->
      <span class="txt_date">{{item.publishedAt}}</span>
      <a :href="item.url" class="link_more" target="_blank">read more ></a>
    </li>
  </ul>
  <button class="btn_more" @click="loadMore()">더보기</button>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
import axios from 'axios'
export default {
  name: 'Search',
  data () {
    return {
      result: '',
      searchQuery:'',
      cnt : 1
    }
  },
  created() {
    this.searchQuery = this.$route.params.query
    console.log(this.$route.params.query)
      axios
    .get(`https://newsapi.org/v2/everything?language=ko&q=${this.searchQuery}&apiKey=602cd3b6051a451d8e99935b8e7cad01`)
    .then(response => {this.result = response.data.articles},
    error => {alert(error)})
    console.log(this.result)
  },

  mounted () {
    
  },
  methods: {
    async getSearchResult () {
      const response = await PostsService.searchList({
        query: this.$route.params.query
      })
      this.result = response.data.result
    },
    infiniteScroll () {
      window.addEventListener('scroll' , () =>{
        const windowHeight = window.outerHeight
        const app = document.getElementById('app')
        const appHeight = app.clientHeight
        const scrollTop = window.scrollY
                
        if(scrollTop > appHeight - windowHeight){

          this.cnt += 1
          console.log(this.cnt)

        axios
          .get(`https://newsapi.org/v2/everything?language=ko&q=${this.searchQuery}&apiKey=602cd3b6051a451d8e99935b8e7cad01&pageSize=${cnt * 20}`)
     
          .then(response => {this.result = response.data.articles},
          error => {alert(error)})
          console.log(this.result)
          }
        })
    },
    loadMore(){
      this.cnt += 1
      console.log(this.cnt)
        axios
          .get(`https://newsapi.org/v2/everything?language=ko&q=${this.searchQuery}&apiKey=602cd3b6051a451d8e99935b8e7cad01&pageSize=${this.cnt * 20}`)
          .then(response => {this.result = response.data.articles},
          error => {alert(error)})
          }
    }

}
</script>