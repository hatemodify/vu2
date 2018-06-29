<template>
  <div class="wrap_login">
    <h2 class="tit_login">login</h2>
    <div style="width:100px;height:100px;background:#f00;" @click="chkState">
      {{this.$store.state.accessToken}}
    </div>
      <input type="text" v-model="id" placeholder="Email Address">
      <input type="password" v-model="password" placeholder="Password">
      <button class="btn_login" @click="logIn(id)">login</button>
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
      url: '/signup'
    }
  },
  methods: {
    chkState () {
      this.$store.state.accessToken = 'login success'
      console.log(this.$store.state.accessToken)
    },
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
    }
  }
}
</script>