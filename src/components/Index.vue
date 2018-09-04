
<template>
  <div class="main_cont">
    <div class="preloader" v-if="loading == false">
      <span class="left"></span>
      <span class="right"></span>
      <span class="preloader_txt"></span>
    </div>
    <div class="wrap_headline">
      <ul class="list_headline">
        <li v-for="item in headLine" :key="item.title">
          <button class="btn_scrap" :class="{'active': isActive}" @click="thisScrap(item)"></button>
          <a :href="item.url" class="link_item">
            <picture class="wrap_thumb" v-if="item.urlToImage">
              <img :src="item.urlToImage" class="thumb_img" alt="">
            </picture>
            <div class="wrap_thumb no_img" v-else>
            </div>
          </a>
          <div class="wrap_info">
            <strong class="tit_news">{{item.title}}</strong>
            <p class="news_desc" v-if="item.description ">{{item.description}}</p>
            <div class="cf">
              <span class="txt_date">{{comm.convertDate(item.publishedAt)}}</span>
              <a :href="item.url" class="link_more" target="_blank">자세히 볼래요 </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="clist_ategory"}
  </div>
</template>
<script>
import axios from 'axios';
import comm from '../services/common.js';
export default {
  data() {
    return {
      loading: false,
      headLine: '',
      isActive: false,
      comm: comm
    };
  },
  mounted() {},
  created() {
    const config = {
      headers: { 'Content-type': 'application/json' }
    };
    axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=602cd3b6051a451d8e99935b8e7cad01',config)
    .then(response => {
      this.headLine = response.data.articles;
      this.loading = true;
    })
    .catch(err => {
      console.log(err);
    });
    axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=602cd3b6051a451d8e99935b8e7cad01',config)
    .then(response => {
      this.headLine = response.data.articles;
      this.loading = true;
    })
    .catch(err => {
      console.log(err);
    });
  },
  methods: {
    txtEncode(txt) {
      return JSON.stringify(txt);
    }
  }
};
</script>
