<template>
  <div class="post_cont">
    <h2 class="tit_page">POSTS</h2>
    <ul class="list_post" v-if="posts.length > 0">
      <li v-for="post in posts" :key="post.id">
        <picture class="wrap_thumb" v-if="post.thumb">
          <img :src="post.thumb" class="thumb_img">
        </picture>
        <div class="wrap_info">
          <strong class="tit_post">
            <router-link v-bind:to="{ name: 'ViewPost', params: { title: encodeURIComponent(post.title) } }">
              {{post.title}}
              </router-link>
          </strong>
          <div class="desc_post" v-if="!post.thumb" v-html="post.content"></div>
          <span class="txt_tag">{{post.tag}}</span>
          <div class="cf">
            <span class="txt_author">{{post.author}}</span>
            <span class="txt_date">{{common.convertDate(post.createdDate)}}</span>
          </div>
        </div>
      </li>
    </ul>
    <div class="no_post" v-else>
      작성된 포스트가 없습니다.
    </div>
    <router-link to="/posts/new" class="btn_write">글쓰기</router-link>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService';
import common from '@/services/common';
export default {
  name: 'posts',
  data() {
    return {
      posts: [],
      thumb: [],
      common
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const response = await PostsService.fetchPosts();
      this.posts = response.data.posts;

      console.log(response);
    },
    getImg() {}
  }
};
</script>
