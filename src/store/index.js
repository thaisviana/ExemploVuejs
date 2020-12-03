import Vuex from "vuex";
import Vue from "vue";
import user from "./modules/user";

import joke from "./modules/joke";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    joke
  }
});