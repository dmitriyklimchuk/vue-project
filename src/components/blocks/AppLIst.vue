<template>
  <h3 class="text-center items__list-title">{{ titleAlbums }}</h3>

  <div  class="row items__list">
    <div v-for="album in albums.slice(0, 5)"
         v-bind:key="album.key"
         class="list__item list__item-album"
    >
      <h4 class="list__item-title">{{ album.title }}</h4>
    </div>
  </div>

  <h3 class="text-center items__list-title">{{ titleComments }}</h3>

  <div class="row items__list">
    <div v-for="comment in commentsFromDataToProvide"
         v-bind:key="comment.key"
         class="col-6 col-md-4 col-xl-3 text-center list__item-comment"
    >
      <h4 class="list__item-title">{{ comment.name }}</h4>
      <p>{{ comment.email }}</p>
      <p>{{ comment.body }}</p>
    </div>
  </div>

</template>

<script>
export default {
  name: "AppLIst",
  inject: ['commentsFromDataToProvide'], // інджектимо дату коментарів, оминаючи мейн компонент
  props: ['albums'],
  data() {
    return {
      users: this.commentsFromDataToProvide,
      titleAlbums: 'My Albums',
      titleComments: 'My Comments',
    }
  },
}
</script>

<style scoped lang="scss">

.items {
  &__list {
    padding: 25px 35px;
    border: 1px solid #10ac84;
    border-radius: 45px;

    &-title {
      padding: 25px 0;
    }
  }
}

.list {
  &__item {
    &-album {
      background-color: #c8d6e5;
      padding: 15px;
      border-radius: 45px;
      margin: 5px 0;
    }

    &-comment {

      > * {
        border: 2px solid #00cec9;
        border-radius: 8px;
        padding: 5px;
      }
    }
  }
}

</style>
