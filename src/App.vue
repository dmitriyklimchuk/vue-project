<template>
  <AppHeader/>
  <AppMain/>
  <AppFooter/>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";
import AppMain from "@/components/layout/AppMain";


export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AppMain,
  },

  data() {
    return {
      albums: '',

    }
  },

  mounted() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(json => this.albums = json)
  }
}
</script>

<style lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ecf0f1;
  min-height: 100vh;
}
</style>
