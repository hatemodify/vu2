<template>
  <div class="category_cont">
    <h2 class="tit_page">{{this.category}}</h2>
    <ul class="list_news">
      <li v-for="item in articles" :key="item.id">
        <a :href="item.url">
          <picture class="wrap_thumb" v-if="item.urlToImage">
            <img :src="item.urlToImage" class="thumb_img" alt="">
          </picture>
            <div class="wrap_thumb no_img" v-else>
          </div>
          <div class="wrap_info">
            <strong class="news_subject">{{item.title}}</strong>
            <p class="news_desc">{{item.description}}</p>
            <div class="cf">
            <span class="txt_source">{{item.source.name}}</span>
            <span class="txt_date">{{comm.convertDate(item.publishedAt)}}</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import VueLodash from 'vue-lodash';
import comm from '../services/common.js';

export default {
  data() {
    return {
      articles: '',
      comm: comm,
      category: this.$route.params.category
    };
  },
  mounted() {
    this.infiniteScroll();
  },
  created: function() {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=kr&category=${
          this.category
        }&apiKey=602cd3b6051a451d8e99935b8e7cad01`
      )
      .then(
        response => {
          this.articles = response.data.articles;
        },
        error => {
          alert(error);
        }
      );
  },
  methods: {

  },
  methods: {
    infiniteScroll() {
      window.addEventListener('scroll', () => {
        const windowHeight = window.outerHeight;
        const app = document.getElementById('app');
        const appHeight = app.clientHeight;
        const scrollTop = window.scrollY;
        if (scrollTop > appHeight - windowHeight) {
          axios
            .get(
              `https://newsapi.org/v2/top-headlines?country=kr&pageSize=40&category=${
                this.category
              }&apiKey=602cd3b6051a451d8e99935b8e7cad01`
            )
            .then(
              response => {
                this.articles = response.data.articles;
              },
              error => {
                alert(error);
              }
            );
        }
      });
    }
  },
  updated() {
    // this.animation()
  }
};
</script>
