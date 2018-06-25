/* eslint-disable */
<template>
  <div class="hello">
    <ul class="list_news">
      <li v-for="item in result">
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
import PostsService from "@/services/PostsService";
export default {
  name: "Search",
  data() {
    return {
      msg: "좀나와라 쫌",
      result:[]
    };
  },
  mounted() {
    this.getSearchResult()

  },

  methods: {
    async getSearchResult() {
      const response  = await PostsService.searchList({
        query: this.$route.params.query
      });
      this.result = response.data.result;
      
    },
    // async getQuery() {
    //   await PostsService.getQuery({
    //     query: this.$route.params.query
    //   });
    // }
  }
};
</script>
<style lang="scss">
@import "../assets/css/news.scss";
</style>
