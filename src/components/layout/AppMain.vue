<template>
  <main class="main">
    <div class="container">
      <div class="row">
        <AppTitle></AppTitle>
        <AppRegistry
            v-if="!isLogged"
        />
        <AppLIst v-else></AppLIst>
      </div>
    </div>
  </main>
</template>

<script>
import AppRegistry from "@/components/blocks/AppRegistry";
import AppTitle from "@/components/blocks/AppTitle";
import AppLIst from "@/components/blocks/AppLIst";

export default {
  name: "AppMain",
  components: {
    AppRegistry,
    AppTitle,
    AppLIst
  },
  data() {
    return {
      isLogged: false
    }
  }
}
</script>

<style scoped lang="scss">
.main {
  padding: 25px;
}
</style>
