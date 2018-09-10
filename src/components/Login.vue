<template>
  <div class="user_cont">
    <h2 class="tit_user">login</h2>
    <div class="cf mb50">
      <input type="text" v-model="id" placeholder="아이디를 입력하세요">
      <input type="password" v-model="password" placeholder="비밀번호를 입력하세요" @keyup.enter="logIn(id)">
      <button class="btn_user" @click="logIn(id)" v-if="chkLogin == 'null'">login</button>
      <button class="btn_user" @click="logOut()" v-else>logout</button>    
    </div>    
    <div class="link_util">
      <router-link to="/signup">회원가입</router-link> / <router-link to="/find">아이디찾기</router-link>
    </div>
        {{test}}
        {{root}}
  </div>
</template>
<script>
import UserService from '@/services/UserService';
import axios from 'axios';
export default {
  data() {
    return {
      id: '',
      password: '',
      msg: '',
      url: '/signup',
      chkLogin: localStorage.accessToken,
      test: '',
      root: process.env.ROOT,
           isActive: false,
    };
  },
  mounted() {
    console.log(process.env);
  },
  created() {},
  methods: {
    async logIn(id, password) {
      await UserService.chekLogin({
        id: this.id,
        password: this.password
      })
        .then(
          response => {
            alert('success login');
            this.$store.dispatch('LOGIN', id);
          },
          error => {
            alert(error.response);
            console.log(error.response);
          }
        )
        .catch(error => {
          alert(error.response);
          console.log(error.response);
        });
      this.$router.push({ name: 'Index' });
    },
    logOut() {
      this.$store
        .dispatch('LOGOUT')
        .then(() => this.$router.push({ name: 'Headline' }));
    }
  }
};
</script>