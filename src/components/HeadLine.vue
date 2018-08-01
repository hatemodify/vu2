<template>
<ul class="list_headline">
  <li v-for="item in headLine" :key="item.title">
    <button class="btn_scrap" :class="{'active': isActive}" @click="thisScrap(item)"></button>
    <a :href="item.url" class="link_item">
      <div class="wrap_thumb" v-if="item.urlToImage">
         <img :src="item.urlToImage" class="thumb_img" alt="">
      </div>
      <div class="wrap_thumb no_img" v-else>
      </div>
    </a>
    <div class="wrap_info">
      <span class="txt_source">{{item.source.name}}</span>        
      <strong class="tit_news">{{item.title}}</strong>
      <div class="cf">
        <span class="txt_date">{{convertDate(item.publishedAt)}}</span>
        <a :href="item.url" class="link_more" target="_blank">자세히 볼래요 </a>
      </div>
    </div>
  </li>
</ul>
</template>

<script>
import axios from 'axios';
import noImg from '../services/common.js'
import PostsService from '../services/PostsService.js'
export default {
  name: "headline",
  data() {
    return {
      headLine: "",
      isActive:false
    };
  },
  created(){
      axios
        .get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=602cd3b6051a451d8e99935b8e7cad01')
        .then(
          response => {
            this.headLine = response.data.articles
          },
          error => {
            alert(error)
          }
        )
  },
  updated() {
    noImg.noImg()
  },
  methods: {
    convertDate (date) {
      return date.replace(/-|T/g, ".").slice(0, 16)
    },
    async thisScrap (val) {
    const userId = localStorage.accessToken
    if(userId !== 'null'){
      await PostsService.addScrap({
        scrap: val,
        userId
      })
    }else{
      alert('로그인 해주세요')
      this.$router.push({ name: 'Login' })
    }
  }, 
}
}
</script>
<style lang="scss">
@import "../assets/css/news.scss";
</style>