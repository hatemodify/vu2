<template>
  <div class="user_cont">
    <h2 class="tit_user">my page</h2>
    <ul class="list_mypage">
      <li>
        <router-link to="/myscrap">스크랩</router-link>
        <router-link to="/interest">관심사 모아보기</router-link>
      </li>
    </ul>
    <button class="btn_user" @click="logOut()">logout</button>    
  </div>
</template>


<script>
  export default {
    data (){
      return{

      }
    },
    methods:{
      logOut () {
        this.$store.dispatch('LOGOUT').then(() => this.$router.push('/'))
      }
    },
    mounted (){
      
    },
    created (){
      const authorization = localStorage.accessToken;
      console.log(authorization)
    },
    updated (){

    }
  }
</script>