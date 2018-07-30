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
  }
}
</script>
<style lang="scss">
@import "assets/css/reset.css";
@import "assets/css/common.scss";
</style>
