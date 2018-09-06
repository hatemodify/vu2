<template>
  <div class="user_cont">
    <h2 class="tit_user">my page</h2>
    <figure class="profile">
      <div class="profile_wrap">
        <picture class="no_profile" v-if="profileImg == 'noImg'"> 
          <img src="~assets/images/no_profile.png"  class="thumb_img" alt="">
        </picture>  
        <picture v-else>
          <img :src="profileImgPath">
        </picture>
      </div>      
      <figcaption></figcaption>
    </figure>
    <ul class="list_mypage">
      <li>
        <router-link to="/myscrap">스크랩</router-link>
      </li>
      <li>
        <router-link to="/interest">관심사 모아보기</router-link>
      </li>
    </ul>
    <button class="btn_user" @click="logOut()">logout</button>    
  </div>
</template>


<script>
import axios from 'axios';
export default {
  data() {
    return {
      profileImg: '',
      profileImgPath: ''
    };
  },
  template: {},
  methods: {
    logOut() {
      this.$store.dispatch('LOGOUT').then(() => this.$router.push('/'));
    }
  },
  mounted() {},
  created() {
    const authorization = localStorage.accessToken;
    axios.get('https://fead.herokuapp.com:9000/mypage').then(
      response => {
        const userData = response.data.data;
        console.log(userData)
        this.profileImg = userData.profile;
        this.profileImgPath = require(`../upload/profile/${this.profileImg}`);
      },
      error => {
        console.log(error);
      }
    );
  },
  updated() {}
};
</script>