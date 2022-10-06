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

  <app-filter-button
      v-on:filter-signal="filterMethod"
      v-on:filter-by-query="filterByQ($event)"
      v-on:filter-reset="resetMethod">

  </app-filter-button>

  <div v-if="mySearchResult">Sorry Search is Empty</div>

  <div class="row items__list">
    <div v-for="comment in comments"
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
import AppFilterBtn from "@/components/elements/AppFilterBtn";
export default {
  name: "AppLIst",
  components: {
    'app-filter-button':AppFilterBtn
  },
  inject: ['commentsFromDataToProvide'], // інджектимо дату коментарів, оминаючи мейн компонент
  props: ['albums'],
  data() {
    return {
      comments: this.commentsFromDataToProvide,
      commentsForReset: this.commentsFromDataToProvide,
      titleAlbums: 'My Albums',
      titleComments: 'My Comments',
      arr: [1,3,5,5,1,1],
      mySearchResult: false
    }
  },

  methods : {
    filterMethod() {
      let filteredByDomain = (this.comments).filter((elem)=> elem.email.includes('.biz'));
      this.comments = filteredByDomain
    },

    resetMethod() {
      this.comments = this.commentsForReset
    },

    filterByQ(searchPhrase) {
      let mySearchResult = (this.commentsForReset).filter((elem)=> elem.email.includes(searchPhrase));
      this.comments = mySearchResult
      console.log(mySearchResult.length)

      // if(mySearchResult.length === 0) {
      //   this.mySearchResult = true
      // } else {
      //   this.comments = mySearchResult
      // }

      mySearchResult.length === 0 ? this.mySearchResult = true : this.comments = mySearchResult
    }
  },

  mounted() {
    console.log(this.commentsForReset);
    console.log(this.comments);
  }


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
