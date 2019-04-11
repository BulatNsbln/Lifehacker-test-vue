import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const proxy = 'https://cors-anywhere.herokuapp.com/';

const state = {
  articleHash: {},
  articleList: []
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
    state.articleList = payload;
  }
};

const actions = {
  loadArticles (context) {
    console.log('----', 'axios');
    axios
      .get(proxy + 'https://lifehacker.ru/api/wp/v2/posts')
      .then( res => {
        context.commit('loadArticles', res.data);
      })
  }
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
