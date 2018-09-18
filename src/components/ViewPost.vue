<template>
  <div class="post_cont">
    <h5 class="tit_post">{{post.title}}</h5>
    <article class="ql-editor" v-html="post.content"></article>
    <div class="wrap_tag">
      <span class="txt_tag" v-for="tag in tagList" :key="tag" v-if="tag !== '#'">{{tag}}</span> 
      </div>
  </div>
</template>


<script>
import axios from 'axios';
import { VueEditor, Quill } from 'vue2-editor';
import PostsService from '@/services/PostsService';
export default {
  data() {
    return {
      post: '',
      tag: '',
      tagList: []
    };
  },
  created() {
    axios
      .get(`${process.env.ROOT_API}/posts/${this.$route.params.title}`)
      .then(response => {
        const tag = response.data.posts.tag;
        this.post = response.data.posts;

        this.splitTag(tag, this.tagList);
      });
  },
  mounted() {},
  methods: {
    splitTag(tag, arr) {
      if (tag) {
        tag
          .replace(/ /gi, '')
          .split(',')
          .forEach(element => {
            arr.push(`#${element}`);
          });
      } else {
        return;
      }
    }
  }
};
</script>

<style lang="css">
@import '//cdn.quilljs.com/1.3.6/quill.core.css';
</style>