<template>
  <div v-if="article" class="article">
    <router-link to="/articles">
      <md-button class="md-raised md-accent">
        Главная
      </md-button>
    </router-link>
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
  .md-raised {
    width: 100%;
  }
  .article {
    max-width: 1000px;
    margin: 0 auto;
  }
</style>
