<template>
  <div class="wrap_login">
    <h2 class="tit_login">login</h2>
      <input type="text" v-model="id" placeholder="Email Address">
      <input type="password" v-model="password" placeholder="Password">
      <button class="btn_login" @click="logIn(id)" v-if="chkLogin == 0">login</button>
      <button class="btn_login" @click="logOut(id)" v-else>logout</button>
    </div>
</template>
<script>
import UserService from '@/services/UserService'
export default {
  data () {
    return {
      id: '',
      password: '',
      msg: '',
      url: '/signup',
      chkLogin: localStorage.accessToken
    }
  },
  methods: {
    async logIn (id, password) {
      await UserService.chekLogin({
        id: this.id,
        password: this.password
      })
        .then(
          response => {
            alert('success login')
            this.$store.dispatch('LOGIN', id)
          },
          error => {
            alert(error.response.data.error)
          }
        )
        .catch(error => {
          alert(error)
        })
      this.$router.push({ name: 'NewsList' })
    },
    logOut () {
      this.$store.dispatch('LOGOUT').then(() => this.$router.push('/'))
    }
  }
}
</script>