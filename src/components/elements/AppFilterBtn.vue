<template>
  <button class="btn btn-success btn__filter" v-on:click="filterData"> Filter </button>
  <button class="btn btn-success btn__filter" v-on:click="resetData"> Reset </button>

  <input type="text" v-on:keyup.enter="searchApp($event)">
</template>

<script>
export default {
  name: 'AppFilterBtn',
  methods: {
    filterData() {
      this.$emit('filter-signal');
    },

    resetData() {
      this.$emit('filter-reset');
    },

    searchApp(event) {
      let filterString = event.target.value
      console.log(event.target.value);
      this.$emit('filter-by-query', filterString)
    }
  }

}

</script>

<style lang="scss">
.btn__filter {
  width: auto;
  margin: 15px auto;
  padding: 15px 25px;
  min-width: 140px;
}
</style>
