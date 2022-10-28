<template>
  <main class="main">
    <div class="container">
      <div class="row">
        <h1>{{ TitleForEvent }}</h1>
        <AppTitle></AppTitle>

        <a href="#" class="btn btn-lg btn-outline-primary" @click.prevent="logOut" v-if="isLogged">Log Out</a>



        <!-- робимо кондішн виводиди чи не виводити рег. форму, кондішн зв'язаний з проп isLogged-->
        <!-- прокидуємо через пропси поперті тайтла з парент компонента -->
        <!-- слухаємо подію яка має відбутися в чайлд копмоненті,при сигнлалі (еміті) викликаємо свій метод loginIn-->
        <AppRegistry
            v-if="!isLogged"
            :form-title="formLoginTitle"
            v-on:app-logging="loginIn" />
        <AppLIst
            v-else
            :albums="albumsA" />
      </div>
    </div>
  </main>
</template>

<script>
import AppRegistry from "@/components/blocks/AppRegistry";
import AppTitle from "@/components/blocks/AppTitle";
import AppLIst from "@/components/blocks/AppLIst";

export default {
  data() {
    return {
      isLogged: true,
      formLoginTitle: 'Log In',
      TitleForEvent: 'Can Change from Event Bus'
    }
  },
  name: "AppMain",
  props: ['albumsA'], // данф передані з парент компонента
  components: {
    AppRegistry,
    AppTitle,
    AppLIst
  },
  methods: {
    loginIn() {
      this.isLogged =  true
    },
    logOut() {
      this.isLogged =  false
    }
  },

  created() {
    this.emitter.on('messageBus',(data) => {
      console.log(data);
      console.log(this.TitleForEvent = data);
    })
  }
}
</script>

<style scoped lang="scss">
.main {
  padding: 25px;
  margin: auto;
}
</style>
