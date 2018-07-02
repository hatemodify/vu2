<template>
  <div id="app">
    <siteheader></siteheader>
    <router-view/>
  </div>
</template>

<script>
import SiteHeader from './header'
export default {
  name: 'App',
  components: {
    siteheader: SiteHeader
  }
}
</script>

<style lang="scss">
@import "assets/css/reset.css";
</style>
