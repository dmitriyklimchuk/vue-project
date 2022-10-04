<template>
  <input class="mt-1 mb-1"
         :type="type"
         :placeholder="placeholder"
         :class="classAttr">
</template>

<script>
export default {
  name: "AppInput",
  props: {
    type: {
      type: String,
      required: false,
      default: 'text'

    },
    classAttr: {
      type: String,
      required: false,
      default: 'form-control'

    },
    placeholder: {
      type: String,
      required: false,
      default: 'My default value of placeholder'

    }
  }
}
</script>

<style scoped>

</style>
