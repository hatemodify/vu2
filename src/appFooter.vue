<template>
  <footer id="appFooter">
    <nav id="appNav">
      <ul class="gnb">
        <li>
          <router-link to="/headline">헤드라인</router-link>
        </li>
        <li>
          <router-link to="/categorylist">카테고리</router-link>
        </li>
        <li>
          <router-link to="/posts">포스트</router-link>
        </li>
        <li @click="activeSearch">찾아보기</li>
        <li v-if="chkLogin === 'null'">
          <router-link to="/login">로그인</router-link>
        </li>
        <li v-else>
          <router-link to="/mypage">마이페이지</router-link>
        </li>        
      </ul>
    </nav>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      searchState: false,
      chkLogin: this.$store.state
    };
  },
  mounted(){
    console.log(this.chkLogin)
  },
  updated(){

  },
  methods: {
    activeSearch: function() {
      const searchForm = document.querySelector('.search_form');
      this.searchState = !this.searchState
      this.searchState ? searchForm.classList.add('on') : searchForm.classList.remove('on')
    },
  }
};
</script>
