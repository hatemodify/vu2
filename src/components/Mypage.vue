<template>
  <div class="user_cont">
    <h2 class="tit_user">my page</h2>
    <ul class="list_mypage">
      <li>
        <router-link to="/myscrap">스크랩</router-link>
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    data (){
      return{

      }
    },
    methods:{

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