<template>
  <footer >
    <AppFooterAcc />
    <button @click="fromBus"> EventWITHBUS </button>
  </footer>
</template>

<script>
import AppFooterAcc from "@/components/blocks/AppFooterAcc";

export default {
  name: "AppFooter",
  components: {
    AppFooterAcc
  },
  data() {
    return {
      busData: 'Hello'
    }
  },
  methods: {
    fromBus() {
      this.emitter.emit('messageBus', this.busData)
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  padding:0 25px 25px;
}
</style>
