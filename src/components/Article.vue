<template>
  <div v-if="article">
    <router-link to="/articles">Назад</router-link>
    <br/>
    <h1>{{article.title.rendered}}</h1>
    <br/>
    <div v-html="`${article.content.rendered}`"></div>
  </div>
  <div v-else>
    <h1>Loading...</h1>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Article',
    computed: {
      article() {
          return this.$store.getters.articleHash(this.id)
      }
    },
    props: {
      id:{
        type: String,
        required: true
      }
    },
    created() {
      const { dispatch } = this.$store;
      if(!this.article) dispatch('loadArticles');
    }
  }
</script>

<style>

</style>
