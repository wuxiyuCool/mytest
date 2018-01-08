<template>
  <div id="app">
    <bgheader></bgheader>
    <router-view/>
    <bgfooter></bgfooter>
  </div>
</template>

<script>
  import bgheader from '@/components/header/header'
  import bgfooter from '@/base/footer/footer'
export default {
    name: 'app',
    components: {
      bgheader,
      bgfooter
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
