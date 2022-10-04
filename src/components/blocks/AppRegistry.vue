<template>
  <div class="form__wrapper p-5 flex-column d-flex">
    <AppFormTitle :second-title="formTitle" />
    <form action=""
          class="form d-flex flex-column"
          ref="registryForm"
          method="post">
      <AppInput
          type="email"
          placeholder="Please Input Your Email"
          />
      <AppInput
          type="password"
          placeholder="Please Input Your Pass"/>
      <button
          type="button"
          class="btn btn-info mt-1 mb-1"
          @click="registry($event)"
      >
        SUBMIT
      </button>
    </form>
  </div>
</template>

<script>
import AppFormTitle from "@/components/elements/AppFormTitle";

export default {
  name: "AppRegistry",
  components: {
    AppFormTitle
  },
  props: ['formTitle'],
  methods: {
    registry() {
      console.log(this.$refs.registryForm);
      console.log(this.$refs.registryForm.querySelectorAll('input'));
      let form = this.$refs.registryForm
      let inputs = form.querySelectorAll('input');
      let inputsLength = inputs.length;

      let formData = []

      inputs.forEach(function(elem){
        if (!elem.value) {
          alert('Please full the input');
        }
         else {
          formData.push(elem.value)
        }
      })

      if(formData.length == inputsLength) {
        this.$emit('app-logging'); // емітимо (файримо, подаємо сигнал що подія відбулась)
      }
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.form {
  gap: 10px;

  &__wrapper {
    box-shadow: 0 5px 5px 5px #95a5a6;
    display: flex;
    width: auto;
    margin: auto;
    border-radius: 10px;
  }
}
</style>
