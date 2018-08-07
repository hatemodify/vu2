<template>
  <div class="intrest_cont">
    <div class="section_cate" v-for="(news, index) in listInterest" :key="index">      
      <strong class="tit_cate">{{interest[index]}}</strong>      
      <ul class="list_interest">
        <li v-for="item in news" :key="item.id">
          <a :href="item.url">
            <figure class="wrap_thumb" v-if="item.urlToImage" v-bind:style="{ backgroundImage: 'url(' + item.urlToImage + ')' }">
            </figure>
              <div class="wrap_thumb no_img" v-else>
            </div>
            <div class="wrap_info">
              <strong class="news_subject">{{item.title}}</strong>
              <!-- <p class="news_desc">{{item.description}}</p> -->
              <!-- <span class="txt_source">{{item.source.name}}</span> -->
              <span class="txt_date">{{item.publishedAt}}</span>
            </div>
          </a>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userId: localStorage.accessToken,
      interest: [],
      listInterest: [],
      len: ""
    };
  },
  created() {
    if (this.userId) {
      axios
        .get("http://localhost:9000/interest")
        .then(response => {
          this.interest = response.data.data;
        })
        .then(
          () => {
            this.getInterest(this.interest);
            this.len = this.interest.length;
            console.log(this.interest);
          },
          error => {
            console.log(error);
          }
        );
    }
  },
  beforeMount() {},
  mounted() {},
  methods: {
    getInterest(arr) {
      arr.forEach((item, index) => {
        console.log(item);
        console.log(
          `https://newsapi.org/v2/top-headlines?country=kr&category=${item}&apiKey=602cd3b6051a451d8e99935b8e7cad01`
        );
        axios
          .get(
            `https://newsapi.org/v2/top-headlines?country=kr&category=${item}&apiKey=602cd3b6051a451d8e99935b8e7cad01`
          )
          .then(
            response => {
              const data = response.data.articles;
              this.listInterest.push(data);
              console.log(this.listInterest.length);
              // this.articles[item] = new Object(data)
            },
            error => {
              alert(error);
            }
          );
      });
    }
  }
};
</script>

<style lang="scss">
@import "../assets/css/news.scss";
</style>