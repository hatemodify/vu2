<template>
  <div class="hello" ref="h">
    <div class="search_form">
      <input type="text" class="inp_search" id="q" name="q" v-model="query">
      <router-link v-bind:to="{ name: 'Search' , params: { query: query } }" class="btn_search"></router-link>
    </div>
     <ul class="list_news">
      <li v-for="(v, k) in news" :key="k" ref="aaaaaa">
        <button class="btn_like" :class="{ 'active': isActive}" @click="thisScrap(v,k)"></button>
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
    <ul class="list_news" ref="list_news" @click="tests">
      <li v-for="item in news.articles" @click="tests" ref="list"> 
        <span class="bg_news" v-bind:style="{ backgroundImage: 'url(' + item.urlToImage + ')' }"></span>  
      </li>
    </ul>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
import axios from 'axios'
export default {
  name: 'News',
  data () {
    return {
      news:'',
      query: '',
      isActive: false
    }
  },
  mounted () {
    this.getNews()
    // this.fetchArticles()
  },
  methods: {
    fetchArticles: function () {
      axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=602cd3b6051a451d8e99935b8e7cad01').then((response) => {        
        this.news = response.data
      }, (error) => {
        alert.log(error)
      })
    },
    tests: function(){
      const $elem = this.$ref['list_news']
    console.log(this.$refs)      
    },
    async thisScrap (val, cate) {
      const userId = localStorage.accessToken
      if(userId !== 'null'){
        val.category = cate 
        await PostsService.addScrap({
          scrap: val,
          userId
        })
      }else{
        alert('로그인 해주세요')
        this.$router.push({ name: 'Login' })
      }
    },
    async getNews () {
      const response = await PostsService.newsList()
      this.news = response.data.news
    },
    gsap : function () {
      const tw = TweenMax
      const el = this.$el.querySelector('.list_news').children
      
      console.log(el)
      tw.staggerTo(el
, .5, {opacity:0} ,.2)
    }
  }
}
</script>
