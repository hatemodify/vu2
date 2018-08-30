<template>
  <div class="interest_cont">
    <div class="section_cate" v-for="(key, index) in listInterest" :key="index">      
      <h3 class="tit_cate" ref="catename">{{key.categoryName}}</h3>
      <ul class="list_interest">
        <li v-for="item in key" :key="item.id">
          <a :href="item.url">
            <figure class="wrap_thumb" v-if="item.urlToImage" v-bind:style="{ backgroundImage: 'url(' + item.urlToImage + ')' }">
            </figure>
            <div class="wrap_thumb no_img" v-else>
            </div>
            <div class="wrap_info">
              <span class="txt_source">{{item.source.name}}</span>        
              <strong class="tit_news">{{item.title}}</strong>
              <div class="cf">
                <span class="txt_date">{{comm.convertDate(item.publishedAt)}}</span>
                <a :href="item.url" class="link_more" target="_blank">자세히 볼래요 </a>
              </div>
            </div>
          </a>
        </li>
      </ul> 
    </div>
  </div>
</template>

<script>
import axios from "axios";
import comm from "../services/common.js";
export default {
  template: {},
  data() {
    return {
      userId: localStorage.accessToken,
      interest: "",
      listInterest: [],
      comm: comm
    };
  },
  created() {
    if (this.userId) {
      axios
        .get(`${process.env.ROOT_API}/interest`)
        .then(response => {
          this.interest = response.data.data;
        })
        .then(
          () => {
            this.getInterest(this.interest);
          },
          error => {
            console.log(error);
          }
        );
    }

    // window.addEventListener("scroll", () => {
    //   this.$el.querySelectorAll(".tit_cate").forEach(item => {
    //     // item.offsetTop < 250 ? (item.style.color = "#fff") : "";
    //     console.log(item.offsetTop);
    //   });
    // });
    document.addEventListener('mousemove', (e) =>{
      console.log(e)
    })
  },
  methods: {
    getInterest(arr) {
      arr.forEach((item, index) => {
        axios
          .get(
            `https://newsapi.org/v2/top-headlines?country=kr&category=${item}&apiKey=602cd3b6051a451d8e99935b8e7cad01`
          )
          .then(
            response => {
              const data = response.data.articles;
              data.categoryName = item;
              this.listInterest.push(data);
            },
            error => {
              alert(error);
            }
          );
      });
    }
  },
  mounted() {



  },
  updated(){
    
  }
};
</script>
