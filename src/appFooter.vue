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
        <li>
          <router-link to="/login">마이페이지</router-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    activeSearch: function() {
      const appHeader = document.querySelector('.search_form');
      this.isActive = !this.isActive;
      this.isActive
        ? appHeader.classList.add('on')
        : appHeader.classList.remove('on');
    },
  }
};
</script>
