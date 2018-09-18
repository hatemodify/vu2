<template>
  <div class="write_post">
    <input type="hidden" name="author" readonly v-model="author" class="inp_author">
    <input type="text" name="title" placeholder="제목을 입력하세요." class="inp_author" v-model="title">
          <!-- <input type="file" name="file" ref="img" @change="onFileChange"> -->
    <div class="wrap_editor">
      <vue-editor v-model="content"></vue-editor>
    </div>
    <input type="text" class="inp_tag" name="tag" placeholder="태그를 입력하세요" v-model="tag">
<sub class="txt_tag">다수의 태그를 입력시 ','로 구분지어 주세요.</sub>
    <!-- <img :src="image"> -->
      <!-- <button class="" @click="submitFile()"></button> -->
      <button class="btn_post" @click="addPost">작성</button>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService';
import { VueEditor } from 'vue2-editor';
import axios from 'axios';
export default {
  name: 'NewPost',
  components: {
    VueEditor
  },
  data() {
    return {
      title: '',
      tag: '',
      author: localStorage.accessToken,
      content: '',
      image: ''
    };
  },
  created() {
    if (localStorage.accessToken == 'null') {
      alert('로그인 해주세요');
      this.$router.push('/login');
    }
  },
  methods: {
    makeThumbImg() {
      const reg = /data:[^"]*/;
      return reg.exec(this.content);
    },
    async addPost() {
      if (!this.title) {
        alert('제목을 입력하세요');
      } else if (!this.content) {
        alert('내용을 입력하세요');
      } else {
        await PostsService.addPost({
          title: this.title,
          author: this.author,
          content: this.content,
          tag: this.tag,
          thumb: this.makeThumbImg()
        });
      }
    },

    upload() {
      let formData = new FormData();
      // formData.append(
      //   'file',
      //   this.$refs.img.files[0],
      //   this.$refs.img.files[0].name
      // );
      // console.log(this.$refs.img.files[0]);
      axios
        .post(`${process.env.ROOT_API}/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(function() {
          console.log('success');
        })
        .catch(function() {
          console.log('fail');
        });
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

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
    }
  },
  updated() {}
};
</script>