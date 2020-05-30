import Vue from 'vue';
import Vuex from 'vuex';

import todo from './modules/todo.js';
import user from './modules/user.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todo,
    user
  }
});
