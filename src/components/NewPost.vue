<template>
  <div class="posts">
    <h1>Add Post</h1>
          <input type="text" name="author" readonly v-model="author">
          <input type="text" name="title" placeholder="제목을 입력하세요." v-model="title">
        <div>
          <input type="file" name="file" ref="img" @change="onFileChange">
        </div>
        <div>
          <vue-editor v-model="content"></vue-editor>
          <textarea name="tag" placeholder="tag" v-model="tag"></textarea>
        </div>
        <img :src="image">
     
          <button class="" @click="submitFile()"></button>
          <button class="app_post_btn" @click="addPost">Add</button>

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
      content:'',
      image: ''
    };
  },
  methods: {
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
    async addPost() {
      await PostsService.addPost({
        title: this.title,
        author: this.author,
        content:this.content,
        tag:this.tag,
        // files: this.image
      });
      console.log(this.image);
      // this.$router.push({ name: 'Posts' })
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
      /*
          Adds the uploaded file to the files array
        */
      console.log(uploadedFiles);
    }
  },
  updated() {
    console.log(this.content);
  }
};
</script>