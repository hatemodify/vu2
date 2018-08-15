<template>
  <div id="app">
    <appHeader></appHeader>
    <div id="content">
      <div class="search_form"></div>
      <div class="inner">
        <router-view/>
      </div>      
    </div>
    <appFooter></appFooter>
  <!-- <footer id="appFooter">
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
        <li v-if="this.$store.state.accessToken === null">                    
          <router-link to="/login">로그인</router-link>
        </li>
        <li v-else>
          <router-link to="/mypage">마이페이지</router-link>
        </li>        
      </ul>
    </nav>
  </footer> -->
  </div>
</template>

<script>
import appHeader from './appHeader'
import appFooter from './appFooter'
export default {
  name: 'App',
  components: {
    appHeader,
    appFooter
  },

}
</script>
<style lang="scss">
@import "assets/css/reset.css";
@import "./assets/css/common.scss";
</style>
