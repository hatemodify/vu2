<template>
  <header id="appHeader">
    <h1 class="app_logo">
      <a href="/headline">
      <img src="./assets/images/logo.png" height="20" alt="fead1">
      </a>
    </h1>
    <nav id="appNav">
      <ul class="gnb">
        <li>
          <router-link to="/headline">헤드라인</router-link>
        </li>
        <li>
          <router-link to="/categorylist">카테고리</router-link>
        </li>
        <li>
          <router-link to="/categorylist">포스팅</router-link>
        </li>
        <li>
          <router-link to="/categorylist">찾아보기</router-link>
        </li>
        <li>
          <router-link to="/categorylist">마이페이지</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "appHeader",
  data() {
    return {

    };
  }
};
</script>
<style lang="scss">
@import "./assets/css/common.scss";
</style>