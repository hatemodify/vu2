<template>
  <div class="user_cont">
    <h2 class="tit_user">my page</h2>
    <figure class="profile">
      <div class="profile_wrap">
        <figure v-if="userData.profile !== 'noImg'">
          <img :src="require(`../upload/profile/${userData.profile}`)" />
        </figure>  
        <figure class="no_profile" v-else>
          <img src="~assets/images/no_profile.png" alt="">
        </figure>
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
import axios from 'axios'
export default {
  data() {
    return {
      userData:'',
    };
  },
  methods: {
    logOut() {
      this.$store.dispatch("LOGOUT").then(() => this.$router.push("/"));
    }
  },
  mounted() {},
  created() {
    const authorization = localStorage.accessToken;
      axios.get("http://localhost:9000/mypage").then(
        response => {
          this.userData = response.data.data;
        },
        error => {
          console.log(error);
        }
      );
  },
  updated() {}
};
</script>