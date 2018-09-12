<template>
  <div class="post_cont">
    <h2 class="tit_page">POST</h2>
    <ul class="list_post" v-if="posts.length > 0">
      <li v-for="post in posts" :key="post.id">
        <picture class="wrap_thumb">
          {{post.content}}
        </picture>
        <div class="wrap_info">
          <strong class="tit_post">
            <router-link v-bind:to="{ name: 'ViewPost', params: { title: encodeURIComponent(post.title) } }">
              {{post.title}}
              </router-link>
          </strong>
          <p class="desc_post">{{post.description}}</p>
          <span class="txt_author">{{post.id}}</span>
          <span class="txt_date"></span>
        </div>
      </li>
    </ul>
    <div class="no_post" v-else>
      no posting
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService';
export default {
  name: 'posts',
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const response = await PostsService.fetchPosts();
      this.posts = response.data.posts;
      this.posts.forEach(elem=>{
        console.log(elem.content.split('<img src="'));
      })
    },
    getImg(){

    }
  }
};
</script>
