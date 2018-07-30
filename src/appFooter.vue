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
      const appHeader = document.getElementById('appHeader');
      this.isActive = !this.isActive;
      this.isActive
        ? appHeader.classList.add('active')
        : appHeader.classList.remove('active');
    },
  }
};
</script>
