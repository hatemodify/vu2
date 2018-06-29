
<!--template>
  <div class="hello">
    <form class="search_form" method="GET" action="/news/search">
      <input type="text" class="inp_search" id="query" name="query">
      <button class="btn_search"></button>
    </form>
    <ul class="list_news">
      <li v-for="(v, k) in news">
        <span class="bg_news" v-if="!v.urlToImage && k == 'sports'" style="background-image:url('https://www.mercurynews.com/wp-content/uploads/2018/06/636415346323739650-N-Keal-Harry2.jpg?w=620')"></span>
        <span class="bg_news" v-else-if="!v.urlToImage && k == 'business'" style="background-image:url('http://d1841mjet2hm8m.cloudfront.net/thumb-900/fr_1094/1720/23/bb55e6007a2fccaf289377dc7f391f51.jpg')"></span>
        <span class="bg_news" v-else-if="!v.urlToImage && k == 'entertainment'" style="backgound-image:url('http://d1841mjet2hm8m.cloudfront.net/thumb-900/fr_1094/1720/61/e758438a81fd37dce2b9116862e1fcbb.jpg')"></span>
        <span class="bg_news" v-else-if="!v.urlToImage && k == 'general'" style="backgound-image:url('http://d1841mjet2hm8m.cloudfront.net/thumb-900t/fr_1228/1620/66/583e4285b0f5bed7a211a62797e8a05c.jpg')"></span>
        <span class="bg_news" v-else v-bind:style="{ backgroundImage: 'url(' + v.urlToImage + ')' }"></span>
        <h3 class="news_cate">{{k}}</h3>
        <div class="tit">{{v.title}}</div>
        <p class="desc_news">
          {{v.description}}
        </p>
        <span class="txt_date">{{v.publishedAt}}</span>
        <a :href="v.url" class="link_more" target="_blank">read more ></a>
      </li>
    </ul>
  </div>
</template -->
<!--script>
import PostsService from '@/services/PostsService';
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '좀나와라 쫌',
      news: []
    };
  },
  mounted() {
    this.getNews();
  },
  methods: {
    async getNews() {
      const response = await PostsService.newsList();
      this.news = response.data.news;
    }
  }
};
</script>

<style lang="scss">
@import '../assets/css/news.scss';
</style>