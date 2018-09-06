<template>
  <div class="user_cont">
    <h3 class="tit_user">Sign Up</h3>
    <div id="signupForm" class="wrap_signup">
      <div class="wrap_inp mt70">
        <strong>사용자 정보</strong>
        <input v-model="id" name="id" placeholder="아이디">
        <input type="password" v-model="password" name="password" placeholder="비밀번호">
      </div>
      <div class="wrap_inp">
        <strong>관심사 선택</strong>                       
        <input type="checkbox" v-model="interest" name="interest" class="chk_interest" id="intentest_1" value="business">
        <label for="intentest_1">business</label>
        <input type="checkbox" v-model="interest" name="interest" class="chk_interest" id="intentest_2" value="sports">
        <label for="intentest_2">sports</label>
        <input type="checkbox" v-model="interest" name="interest" class="chk_interest" id="intentest_3" value="general">
        <label for="intentest_3">general</label>
        <input type="checkbox" v-model="interest" name="interest" class="chk_interest" id="intentest_4" value="health">
        <label for="intentest_4">health</label>
        <input type="checkbox" v-model="interest" name="interest" class="chk_interest" id="intentest_5" value="entertainment">
        <label for="intentest_5">entertainment</label>
        <input type="checkbox" v-model="interest" name="interest" class="chk_interest" id="intentest_6" value="science">
        <label for="intentest_6">science</label> 
      </div>
      <div class="wrap_inp">
        <strong>프로필 등록</strong>
        <figure class="profile_img">
          <label for="reg_profile" class="wrap_profile">
            <img src="~assets/images/reg_profile.png" v-if="!image">
            <img :src="image" v-else>
          </label>
          <input type="file" id="reg_profile" name="reg_profile" ref="reg_profile" class="accessibility" @change="onFileChange">
        </figure>
        <figcaption>
          프로필 이미지를 등록하세요
        </figcaption>
      </div>
      <button class="btn_user" @click="signUp">Sign Up</button>
    </div>
  </div>
</template>

<script>
import UserService from '@/services/UserService';
import axios from 'axios';
export default {
  data: () => {
    return {
      id: '',
      password: '',
      interest: [],
      image: '',
      profileImg: '',
      formData: new FormData()
    };
  },
  methods: {
    async signUp() {
      if (!this.id) {
        alert('id 를 입력해주세요');
        return;
      } else if (!this.password) {
        alert('password 를 입력해주세요');
        return;
      } else {
        this.formData.append('id', this.id);
        this.formData.append('password', this.password);
        this.formData.append('interest', this.interest);

        const config = {
          headers: { 'Content-Type': 'multipart/form-data' }
        };
        axios
          .post(`${process.env.ROOT_API}/user/signup`, this.formData, config)
          .then(function() {
            console.log('success');
          })
          .catch(function() {
            console.log('fail');
          });

        this.$router.push({ name: 'Login' });
      }
      console.log(this.interest);
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
      this.formData.append(
        'file',
        this.$refs.reg_profile.files[0],
        this.$refs.reg_profile.files[0].name
      );
    },
    createImage(file) {
      const image = new Image();
      const reader = new FileReader();
      const vm = this;

      reader.onload = e => {
        vm.image = e.target.result;
        console.log(vm.image);
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(e) {
      this.image = '';
    },
    handleFilesUpload() {
      let uploadedFiles = this.$refs.files.files;
      /*
          Adds the uploaded file to the files array
        */
      console.log(uploadedFiles);
    }
  }
};
</script>