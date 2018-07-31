<template>
  <div class="user_cont">
    <h3 class="tit_page tit_user">Sign Up</h3>
    <div class="wrap_signup">
      <input v-model="id" placeholder="아이디">
      <input type="password" v-model="password" placeholder="비밀번호">
      <button class="btn_user" @click="signUp">Sign Up</button>
    </div>
  </div>
</template>

<script>
import UserService from '@/services/UserService'
export default {
  data: () => {
    return {
      id: '',
      password: ''
    }
  },
  methods: {
    async signUp () {
      await UserService.addUser({
        id: this.id,
        password: this.password
      })
      this.$router.push({ name: 'Login' })
    }
  }
  /*
  methods: {
    signUp: function(event){
      this.$http.post("../services/UserService", {
          user: this.user
        })
        .then(response => {
          if (response.data.result === 0) {
            alert("Error, please, try again")
          }
          if (response.data.result === 1) {
            alert("Success")
            this.$router.push("/login") // Login 페이지로 보내줌
          }
        })
        .catch(function(error) {
          alert("error")
        })
    }
  } */
}
</script>