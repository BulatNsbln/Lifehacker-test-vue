<template>
  <div v-if="articleList.length">
    <ul class="article-list">
      <li v-for="article in articleList" :key="`${article.id}`">
        <img class="image-cat" :src="article.cat_cover.sizes.mobile"/>
        <router-link :to="`articles/${article.id}`">
          <h2>{{article.title.rendered}}</h2>
        </router-link>
      </li>
    </ul>
  </div>
  <div v-else>
    <h1>Loading...</h1>
  </div>
</template>

<script>
  export default {
    name: 'ArticleList',
    computed: {
        articleList() {
           return this.$store.getters.articleList
        }
    },
    created() {
      const { dispatch } = this.$store;
      if(!this.articleList.length) dispatch('loadArticles');
    }
  }
</script>

<style scoped>
  .article-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 15px;
    width: 80%;
    min-width: 370px;
    background-color: #f5f5f5;
    list-style: none;
  }
  @media(max-width: 400px) {
    .article-list {
      padding: 0;
      background-color: white;
    }
  }
  .image-cat {
    flex-shrink: 0;

    width: 130px;
    height: 130px;

    /*background: url( ${ (props) => props.link  } ) center center;*/

    border-radius: 50%;
  }
</style>
