/* eslint-disable */
<template>
  <div class="hello">
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
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'Search',
  data () {
    return {
      result: []
    }
  },
  mounted () {
    this.getSearchResult()
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
@import '../assets/css/news.scss'
</style>
