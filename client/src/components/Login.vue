<template>
  <div class="wrap_login">
    <h2 class="tit_login">login</h2>
      <input type="text" v-model="id" placeholder="Email Address">
      <input type="password" v-model="password" placeholder="Password">
      <button class="btn_login" @click="logIn">login</button>      
  </div>
</template>
<script>
import UserService from '@/services/UserService'
export default {
  data() {
    return {
      id: '',
      password: '',
      msg: '',
      url: '/signup'
    };
  },
  methods: {
    async logIn() {
      await UserService.chekLogin({
        id: this.id,
        password: this.password        
      }).then(
        (response) => {  
          alert('success login')
        },
        (error) => { 
          alert(error.response.data.error)
        }
      )
      .catch(error => {
        alert(error)
      });
      this.$router.push({ name: 'News' });
    }
  }
};
</script>