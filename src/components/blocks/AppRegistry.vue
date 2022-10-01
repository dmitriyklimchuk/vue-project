<template>
  <div class="form__wrapper p-5">
    <form action=""
          class="form d-flex flex-column"
          ref="registryForm"
          method="post">
      <input class="form-control"
             placeholder="Please Input Your Email"
             type="email">
      <input class="form-control"
             placeholder="Please Input Your Pass"
             type="password">
      <button type="button"
              class="btn btn-info" @click="registry($event)">Info</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AppRegistry",
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
        alert('ALl is ok');
        this.isLogged = true
      }
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
