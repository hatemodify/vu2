<template>
  <ul class="list_articles">
    <li v-for="(v, k) in articles" :key="k">
      <span class="bg_news" v-if="!v.urlToImage && k == 'sports'" style="background-image:url('https://www.mercurynews.com/wp-content/uploads/2018/06/636415346323739650-N-Keal-Harry2.jpg?w=620')"></span>
      <span class="bg_news" v-else-if="!v.urlToImage && k == 'business'" style="background-image:url('http://d1841mjet2hm8m.cloudfront.net/thumb-900/fr_1094/1720/23/bb55e6007a2fccaf289377dc7f391f51.jpg')"></span>
      <span class="bg_news" v-else-if="!v.urlToImage && k == 'entertainment'" style="background-image:url('http://d1841mjet2hm8m.cloudfront.net/thumb-900/fr_1094/1720/61/e758438a81fd37dce2b9116862e1fcbb.jpg')"></span>
      <span class="bg_news" v-else-if="!v.urlToImage && k == 'general'" style="background-image:url('http://d1841mjet2hm8m.cloudfront.net/thumb-900t/fr_1228/1620/66/583e4285b0f5bed7a211a62797e8a05c.jpg')"></span>
      <span class="bg_news" v-else v-bind:style="{ backgroundImage: 'url(' + v.urlToImage + ')' }"></span>
      <h3 class="news_cate">{{k}}</h3>
      <div class="tit">{{v.title}}</div>
      <p class="desc_news">
        {{v.description}}
      </p>
      <span class="txt_date">{{v.publishedAt}}</span>
      <a :href="v.url" class="link_more" target="_blank">read more ></a>
    </li>
  </ul> 
</template>

<script>
import axios from 'axios'
import VueLodash from 'vue-lodash'


  export default {
    data () {
      return {
        articles: '',
          counter: 0
      }
    },
    mounted () {

    },
    created: function(){
      const {category} = this.$route.params        
      axios
        .get(`https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=602cd3b6051a451d8e99935b8e7cad01`)
        .then(response => {this.articles = response.data.articles},
        error => {alert(error)})
    },
    methods:{
      animation : function (){
        const tw = TweenMax
        const li = document.querySelector('.list_articles').childNodes   
       
        console.log(li)
          tw.staggerTo(li, .3, {x:'0%', opacity: 1}, .1)
      }
    },
    updated() {
      this.animation()
    },
  }
</script>
<style lang="scss">
@import "../assets/css/news.scss";
</style>