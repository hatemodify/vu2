<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li v-for="news in news" :key="news.source.id">
        <div class="tit">{{news.title}}</div>
        <div>
          {{news.description}}
        </div>
        
        <div>
          {{news.publishedAt}}
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
  li{
    display: block !important;
  }
  .tit{
    color:#f00;
  }
</style>
<script>
// export default {
//   name: "HelloWorld",
//   data() {
//     return {
//       msg: 'to Your Vue.js App'
//     }
//   }
// }
import PostsService from '@/services/PostsService'
export default {
  name: 'HelloWorld',
  data () {    
    return {
      msg: '좀나와라 쫌',
      news:[
        
      ]
    }
  },
  mounted () {
    this.getNews()
  },
  methods: {
    async getNews () {
      const response = await PostsService.newsList()
      this.news = response.data.news
  
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
