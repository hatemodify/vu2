<template>
<div style="background:#fff;">
  {{aaaa}}
</div>
</template>

<script>
import axios from 'axios'
import PostsService from '@/services/PostsService';
export default{
  data(){
    return{
      contents:'',
      aaaa:''
    };
  },

  created (){
    console.log(this.$route.params.title)
    axios.get(`${process.env.ROOT_API}/posts/${this.$route.params.title}`)
    .then(response =>{
      this.contents = response.data.posts;
      this.aaaa = response.data.posts.content
    })

  },
  mounted(){

  }, 
}


</script>