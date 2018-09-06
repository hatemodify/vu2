<template>

</template>


<script>
import PostsService from '@/services/PostsService';
import axios from 'axios';
export default {
  name: 'MyScraps',
  data() {
    return {
      userId: localStorage.accessToken,
      scrapList: ''
    };
  },
  created() {
    this.getScrap();
    // console.log(axios.defaults.headers)
  },
  methods: {
    async getScrap() {
      axios.get(`${process.env.ROOT_API}/myscrap`).then(
        response => {
          this.scraps = response.data;
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
};
</script>
