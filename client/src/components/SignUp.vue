<template>
  <div id="app">
    <h3 class="tit_signup">Sign Up</h3>
    <input v-model="id" placeholder="id">
    <input type="password" v-model="password" placeholder="password">
    <button @click="signUp">Sign Up</button>
  </div>
</template>

<script>
import UserService from "@/services/UserService";
export default {
  data: () => {
    return {
      id: "",
      password: ""
    }
  },
  methods: {
    async signUp() {
      await UserService.addUser({
        id: this.id,
        password: this.password
      });
      this.$router.push({ name: 'Login' });
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
            alert("Error, please, try again");
          }
          if (response.data.result === 1) {
            alert("Success");
            this.$router.push("/login"); // Login 페이지로 보내줌
          }
        })
        .catch(function(error) {
          alert("error");
        });
    }
  } */
};
</script>