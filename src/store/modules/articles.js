import Vue from 'vue';
import axios from "axios";

const proxy = 'https://cors-anywhere.herokuapp.com/';

const state = {
  articleHash: {},
};

const getters = {
  articleHash: state => id => state.articleHash[id],
  articleList: state => Object.values(state.articleHash)
};

const mutations = {
  loadArticles (state, payload) {
    payload.map( article => {
      Vue.set(state.articleHash, article.id, article);
    });
  }
};

const actions = {
  loadArticles (context) {
    axios
      .get(proxy + 'https://lifehacker.ru/api/wp/v2/posts')
      .then( res => {
        context.commit('loadArticles', res.data);
      })
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
