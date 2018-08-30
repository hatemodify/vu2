<template>
  <div class="user_cont">
    <h3 class="tit_user">Sign Up</h3>
    <div class="wrap_signup">
      <div class="wrap_inp mt70">
        <strong>사용자 정보</strong>
        <input v-model="id" placeholder="아이디">
        <input type="password" v-model="password" placeholder="비밀번호">
      </div>
      <div class="wrap_inp">
        <strong class="">관심사 선택</strong>                       
        <input type="checkbox" v-model="interest" class="chk_interest" id="intentest_1" value="business">
        <label for="intentest_1">business</label>
        <input type="checkbox" v-model="interest" class="chk_interest" id="intentest_2" value="sports">
        <label for="intentest_2">sports</label>
        <input type="checkbox" v-model="interest" class="chk_interest" id="intentest_3" value="general">
        <label for="intentest_3">general</label>
        <input type="checkbox" v-model="interest" class="chk_interest" id="intentest_4" value="health">
        <label for="intentest_4">health</label>
        <input type="checkbox" v-model="interest" class="chk_interest" id="intentest_5" value="entertainment">
        <label for="intentest_5">entertainment</label>
        <input type="checkbox" v-model="interest" class="chk_interest" id="intentest_6" value="science">
        <label for="intentest_6">science</label> 
      </div>
      <button class="btn_user" @click="signUp">Sign Up</button>
    </div>
  </div>
</template>

<script>
import UserService from "@/services/UserService";
export default {
  data: () => {
    return {
      id: "",
      password: "",
      interest: []
    };
  },
  methods: {
    async signUp() {
      if (!this.id) {
        alert("id 를 입력해주세요");
        return;
      } else if (!this.password) {
        alert("password 를 입력해주세요");
        return;
      } else {
        await UserService.addUser({
          id: this.id,
          password: this.password,
          interest: this.interest
        });
        this.$router.push({ name: "Login" });
      }
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
};
</script>