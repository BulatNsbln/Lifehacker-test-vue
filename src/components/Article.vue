<template>
  <div>
    <router-link to="/articles">Назад</router-link>
    </br>
    {{article.title.rendered}}
    </br>
    <div v-html="`${article.content.rendered}`"></div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Article',
    data () {
      return {
        article: {}
      }
    },
    props: {
      id: String
    },
    methods: {
      loadArticle() {
        const url = `https://lifehacker.ru/api/wp/v2/posts/${this.id}`;
        axios.get(url)
          .then((response) => {
            this.article = response.data;
          })
          .catch((err) => global.console.log(err))
      }
    },
    mounted() {
      this.loadArticle();
    }
  }
</script>

<style>

</style>
