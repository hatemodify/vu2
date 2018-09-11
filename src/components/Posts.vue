<template>
<!--   <div class="posts">
    <h1>Posts</h1>
    <div v-if="posts.length > 0" class="table-wrap">
      <div>
        {{posts}}
        <router-link v-bind:to="{ name: 'NewPost' }" class="">Add Post</router-link>
      </div>
      <table>
        <tr>
          <td>Title</td>
          <td width="550">Description</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="post in posts" :key="post.id">
          <td>{{ post.title }}</td>
          <td>{{ post.description }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditPost', params: { id: post._id } }">Edit</router-link> |
            <a href="#">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no posts.. Lets add one now <br /><br />
      <router-link v-bind:to="{ name: 'NewPost' }" class="add_post_link">Add Post</router-link>
    </div>
  </div> -->
</template>


<template>
  <div class="post_cont">
    <h2 class="tit_page">POST</h2>
    <ul class="list_post" v-if="posts.length > 0">
      <li v-for="post in posts" :key="post.id">
        <picture class="wrap_thumb"></picture>
        <div class="wrap_info">
          <strong class="tit_post">
            <router-link v-bind:to="{ name: 'ViewPost', params: { title: post.title } }">
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
    }
  }
};
</script>
