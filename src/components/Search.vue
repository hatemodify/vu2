<template>
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
</template>

<script>
import PostsService from '@/services/PostsService'
import axios from 'axios'
export default {
  name: 'Search',
  data () {
    return {
      result: '',
      searchQuery:''
    }
  },
  created() {
    const query = this.$route.params.query
    console.log(this.$route.params.query)
      axios
    .get(`https://newsapi.org/v2/everything?language=ko&q=${query}&apiKey=602cd3b6051a451d8e99935b8e7cad01`)
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
    }
  }
}
</script>
<style lang="scss">
@import '../assets/css/news.scss';
</style>
