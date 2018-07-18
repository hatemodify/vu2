<template>
<ul class="list_headline">
  <li v-if="item.urlToImage" v-for="item in headLine" :key="item.title">
    <a :href="item.url" class="link_item">
      <img :src="item.urlToImage" class="thumb_img" alt="">
    </a>
    <div class="wrap_info">
      <div class="ov">
        <span class="txt_cate"></span>
        <button class="btn_scrap"></button>
        <strong class="tit_news">
          {{item.title}}
        </strong>
        <span class="ov">
        <span class="txt_source">{{item.source.name}}</span>
        <span class="txt_date">{{convertDate(item.publishedAt)}}</span>
        </span>
      </div>
    </div>
  </li>
</ul>
</template>

<script>
import axios from 'axios'

export default {
  name: 'headline',
  data() {
    return {
      headLine: ''
    }
  },
  mounted() {
    this.getHeadLine()
  },
  methods: {
    getHeadLine: function() {
        axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=602cd3b6051a451d8e99935b8e7cad01',{

        }).then((response) => {        
        this.headLine = response.data.articles
      }, (error) => {
        alert(error)
      })
    },
    convertDate: function (date){
      return date.replace(/-/g,'.').slice(0,10)
    }
  }
};
</script>
<style lang="scss">
@import '../assets/css/news.scss';
</style>