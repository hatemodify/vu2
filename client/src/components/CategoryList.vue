<template>
<!-- <router-link v-bind:to="{ name: 'Search' , params: { query: query } }" class="btn_search"></router-link> -->
  <ul class="list_category">
    <li v-for="(img, cate) in categoryList" :key="cate">          
      <router-link v-bind:to="{ name: 'Category' , params: { category: cate }}" class="link_item">
      <span class="tit_cate">
        {{cate}}
        <span class="name_ko" v-if="cate === 'Business'">경제</span>
        <span class="name_ko" v-if="cate === 'Sports'">스포츠</span>
        <span class="name_ko" v-if="cate === 'General'">정치</span>
        <span class="name_ko" v-if="cate === 'Entertainment'">연예</span>
        <span class="name_ko" v-if="cate === 'Health'">건강</span>        
        <span class="name_ko" v-if="cate === 'Science'">과학</span>
      </span>
      <figure class="bg_category">
        <img :src="img">
      </figure>      
    </router-link>
    </li>
  </ul>
</template>

<script>
import bgBusiness from '../assets/images/bg_business.png'
import bgSports from '../assets/images/bg_sports.png'
import bgHealth from '../assets/images/bg_health.png'
import bgScience from '../assets/images/bg_science.png'
import bgGeneral from '../assets/images/bg_general.png'
import bgEntertainment from '../assets/images/bg_entertainment.png'
  export default {
    name: 'category',
    data () {
      return {
        category: '',
        params: '',
          //       categoryList: [
          // 'business', 
          // 'sports',
          // 'general', 
          // 'entertainment',
          // 'health', 
          // 'science' ]     
        categoryList: {
          Business: bgBusiness,
          Sports:bgSports,
          General:bgGeneral,
          Health:bgHealth,
          Entertainment:bgEntertainment,
          Science:bgScience,          
        }          
      }
    },
    mounted () {
      this.gsap()
    },
    methods:{
      gsap : function () {
        console.log(this.$route.params)
      }
    }
  }
</script>
 <style lang="scss">
@import "../assets/css/news.scss";
 </style>