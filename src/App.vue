<template>
  <AppHeader/> <!-- Використовую свій компонент, можливо ось так  <AppHeader/> або <AppHeader></>AppHeader>-->
  <AppMain :albums="albums"/>
  <AppFooter/>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader"; // імпорт потрібних нам компонентів
import AppFooter from "@/components/layout/AppFooter";
import AppMain from "@/components/layout/AppMain";


export default {
  name: 'App',
  components: {
    // Реєстрація компнентів
    // як приклад якщо я хочу інший кастомний тег:
    // 'app-header': AppHeader
    AppHeader,
    AppFooter,
    AppMain,
  },

  data() {
    return {
      // дані які я буду передавати через provide(), оминаючи ланцюг parent->child
      // нажаль динасічно передати дані які отримано через фетч неможливо
      comments: [{
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      },
        {
          "postId": 1,
          "id": 2,
          "name": "quo vero reiciendis velit similique earum",
          "email": "Jayne_Kuhic@sydney.com",
          "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
        },
        {
          "postId": 1,
          "id": 3,
          "name": "odio adipisci rerum aut animi",
          "email": "Nikita@garfield.biz",
          "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
        },
        {
          "postId": 1,
          "id": 4,
          "name": "alias odio sit",
          "email": "Lew@alysha.tv",
          "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
        },
        {
          "postId": 1,
          "id": 5,
          "name": "vero eaque aliquid doloribus et culpa",
          "email": "Hayden@althea.biz",
          "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
        },
        {
          "postId": 2,
          "id": 6,
          "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
          "email": "Presley.Mueller@myrl.com",
          "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
        },
        {
          "postId": 2,
          "id": 7,
          "name": "repellat consequatur praesentium vel minus molestias voluptatum",
          "email": "Dallas@ole.me",
          "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
        },
        {
          "postId": 2,
          "id": 8,
          "name": "et omnis dolorem",
          "email": "Mallory_Kunze@marie.org",
          "body": "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
        },
        {
          "postId": 2,
          "id": 9,
          "name": "provident id voluptas",
          "email": "Meghan_Littel@rene.us",
          "body": "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
        },
        {
          "postId": 2,
          "id": 10,
          "name": "eaque et deleniti atque tenetur ut quo ut",
          "email": "Carmen_Keeling@caroline.name",
          "body": "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
        },],

      // створю проп в які закину дані альбомів отриманих через фетч
      // пропси дозволяють прокинути динамічні дані, але нам не оминути ланцюг
      // парент -- чайлд -- діп чайлд
      albums: [],
    }
  },

  beforeCreate() {
    // фетчимо дату і закидуємо в інстанс перед створенням інстанса
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(json => this.albums = json)
  },
  provide() {
    // передаємо дату (коментарі)
    return {
      commentsFromDataToProvide: this.comments
    }
  },
}
</script>

<style lang="scss">
.app {
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ecf0f1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
