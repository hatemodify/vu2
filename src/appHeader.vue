<template>
  <header id="appHeader">
    <div class="inner">
      <h1 class="app_logo">
        <a href="/headline">
        <img src="./assets/images/logo.png" height="20" alt="fead1">
        </a>
      </h1>
      <button class="btn_menu" v-bind:class="{active:isActive}" @click="activeMenu">
        <span class="ico_fead ico_menu"></span>
      </button>
    </div>
    <form class="search_form">    
      <fieldset>검색폼</fieldset>    
      <input type="text" v-model="searchQuery">
      <span style="color:#fff">{{searchQuery}}</span>
      <button class="btn_search" @click.prevent="onsubmit()"></button>
    </form>
    <aside class="side_menu">
      <nav class="side_nav">
      </nav>
    </aside>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      searchQuery:''
    };
  },
  methods: {
    activeMenu () {
      const appHeader = document.getElementById("appHeader");
      this.isActive = !this.isActive;
      this.isActive
        ? appHeader.classList.add("active")
        : appHeader.classList.remove("active");
    },
    onsubmit (e){
      console.log(this.searchQuery)      
      this.$router.push(`/search/${this.searchQuery}`)
    }
  }
};
</script>
