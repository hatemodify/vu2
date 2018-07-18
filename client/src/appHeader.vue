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
          <a href="javascript:;">헤드라인</a>
        </li>
        <li>
          <a href="javascript:;">카테고리</a>
        </li>
        <li>
          <a href="javascript:;">포스팅</a>
        </li>
        <li>
          <a href="javascript:;">찾아보기</a>
        </li>
        <li>
          <a href="javascript:;">마이페이지</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "appHeader",
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "./assets/css/common.scss";
</style>