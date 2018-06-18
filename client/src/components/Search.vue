/* eslint-disable */
<template>
  <div class="hello">
    <ul class="list_news">
      <li v-for="item in result">
        {{item.title}}
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
