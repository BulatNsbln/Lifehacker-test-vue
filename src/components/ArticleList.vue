<template>
  <div>
    <ul class="article-list">
      <li v-for="article in articles">
        <img :src="`${article.cat_cover.sizes.mobile}`"/>
        <router-link :to="`articles/${article.id}`"
                     :key="`${article.id}`">
          {{article.title.rendered}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'ArticleList',
    data () {
      return {
        msg: 'ArticleList',
        articles: []
      }
    },
    methods: {
      loadData() {
        const url = 'https://lifehacker.ru/api/wp/v2/posts';
        axios.get(url)
          .then( (response) => {
            this.articles = response.data;
          })
          .catch( (err) => global.console.error(err))
      }
    },
    mounted() {
      this.loadData();
    }
  }
</script>

<style>
  .article-list {
    list-style: none;
  }
</style>
