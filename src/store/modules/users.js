import axios from "axios";

const state = {
    users:[]
  };
  const getters = {
    allUsers: state => state.users
  };

  const actions = {
    getUsers({ commit }) {
        axios.get(
            "https://jsonplaceholder.typicode.com/users"
          ).then((response) => {
            commit('getUsers', response.data);
        });
    },
    
  };
  const mutations = {
    getUsers: (state, users) => (state.users = users),
  };
 
  export default {
    state,
    getters,
    actions,
    mutations,
  };
  