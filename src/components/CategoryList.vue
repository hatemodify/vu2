<template>
<!-- <router-link v-bind:to="{ name: 'Search' , params: { query: query } }" class="btn_search"></router-link> -->
  <ul class="list_category">
    <li v-for="(img, cate) in categoryList" :key="cate" v-bind:id="cate" @click="animation().routingAnimation(cate)">          
      <!-- <router-link v-bind:to="{ name: 'Category' , params: { category: cate }}" class="link_item"> -->
      <span class="tit_cate">
        {{cate}}
        <span class="name_ko" v-if="cate === 'business'">경제</span>
        <span class="name_ko" v-if="cate === 'sports'">스포츠</span>
        <span class="name_ko" v-if="cate === 'general'">정치</span>
        <span class="name_ko" v-if="cate === 'entertainment'">연예</span>
        <span class="name_ko" v-if="cate === 'health'">건강</span>        
        <span class="name_ko" v-if="cate === 'science'">과학</span>
      </span>
      <picture class="bg_category">
        <img :src="img">
      </picture>      
    <!-- </router-link> -->
    </li>
  </ul>
</template>

<script>
import axios from 'axios';
import bgBusiness from '../assets/images/bg_business.png';
import bgSports from '../assets/images/bg_sports.png';
import bgHealth from '../assets/images/bg_health.png';
import bgScience from '../assets/images/bg_science.png';
import bgGeneral from '../assets/images/bg_general.png';
import bgEntertainment from '../assets/images/bg_entertainment.png';
export default {
  data() {
    return {
      category: '',
      params: '',
      categoryList: {
        business: bgBusiness,
        sports: bgSports,
        general: bgGeneral,
        health: bgHealth,
        entertainment: bgEntertainment,
        science: bgScience
      }
    };
  },
  mounted() {
    this.animation().loadAnimation();
  },
  methods: {
    animation: function() {
      const tw = TweenMax;
      const li = document.querySelector('.list_category').childNodes;
      return {
        loadAnimation: () => {
          tw.staggerTo(li, 0.8, { rotationX: 0, opacity: 1 }, 0.1);
        },
        routingAnimation: cate => {
          tw.staggerTo(li, 0.3, { x: '-100%', opacity: 0 }, 0.1, () => {
            this.$router.push(`/category/${cate}`);
          });
        }
      };
    }
  }
};
</script>