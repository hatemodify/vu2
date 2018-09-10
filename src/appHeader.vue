<template>
  <header id="appHeader" ref="appHeader">
    <div class="inner">
      <h1 class="app_logo">
        <router-link to="/">
          <img src="./assets/images/logo.png" height="20" alt="fead1">
        </router-link>
      </h1>
      <button class="btn_menu" v-bind:class="{active:isActive}" @click="activeMenu">
        <span class="ico_fead ico_menu"></span>
      </button>
    </div>
    <form class="search_form" v-bind:class="{on:searchState}">
      <legend>검색폼</legend>
      <input type="text" class="inp_search" v-model="searchQuery" placeholder="Search...">
      <button class="btn_search" @click.prevent="searchEvt"></button>
    </form>
    <aside class="side_menu">
      <div class="inner">
        <div class="wrap_profile" v-if="chkLogin !== 'null'">
          <picture class="wrap_thumb">
            <img :src="profileImgPath" class="thumb_img" alt="">
          </picture>
          <strong class="user_name">{{user}}</strong>
        </div>
        <div class="wrap_profile" v-else>
          <picture class="wrap_thumb no_profile">
            <img src="./assets/images/thumb_user.png" class="thumb_img" alt="">
          </picture>
          <strong class="txt_login">로그인 하시면 더 많은 서비스를 이용하실 수 있습니다.</strong>
          <router-link to="/login" @click="activeMenu">로그인</router-link>
        </div>
        <nav class="side_nav">
          <ul class="list_menu">
            <li>마이페이지</li>
            <li>마이페이지</li>
            <li>나의 포스팅</li>
            <li>포스팅</li>
            <li>마이페이지</li>
          </ul>
        </nav>
        <button class="btn_logout" v-if="chkLogin !== 'null'">로그아웃</button>
      </div>
    </aside>
  </header>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      isActive: false,
      searchQuery: '',
      searchState: false,
      chkLogin: localStorage.accessToken,
      profileImg: '',
      profileImgPath: '',
      user: ''
    };
  },
  watch: {
    reSearch() {
      this.searchQuery = '검색어를 입력하세요';
    }
  },
  methods: {
    activeMenu(e) {
      const appHeader = document.getElementById('appHeader');
      const nav = document.querySelector('.side_menu');
      this.isActive = !this.isActive;
      this.isActive
        ? appHeader.classList.add('active')
        : appHeader.classList.remove('active');  
            
      nav.addEventListener('click', function(e) {
        if (e.target == this) {
          appHeader.classList.remove('active');
          this.isActive = !this.isActive;
        }
      });
    },
    searchEvt() {
      !this.searchQuery
        ? alert('검색어를 입력해 주세요')
        : this.$router.push(`/search/${this.searchQuery}`);
    }
  },
  created() {
    if (this.chkLogin !== 'null') {
      axios.get(`${process.env.ROOT_API}/mypage`).then(
        response => {
          const userData = response.data.data;
          console.log(userData);
          this.user = userData.id;
          this.profileImg = userData.profile;
          this.profileImgPath = require(`./upload/profile/${this.profileImg}`);
        },
        error => {
          console.log(error);
        }
      );
    }
  },
  mounted() {}
};
</script>
