import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from '@/components/ArticleList.vue'
import Article from '@/components/Article.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/articles'
    },

    {
      path: '/articles',
      name: 'Article',
      component: ArticleList
    },

    {
      path: '/articles/:id',
      name: 'Article',
      props: true,
      component: Article
    }
  ]
})
